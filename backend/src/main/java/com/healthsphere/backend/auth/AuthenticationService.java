package com.healthsphere.backend.auth;

import com.healthsphere.backend.entity.RefreshToken;
import com.healthsphere.backend.entity.Role;
import com.healthsphere.backend.entity.User;
import com.healthsphere.backend.repository.UserRepository;
import com.healthsphere.backend.security.JwtService;
import com.healthsphere.backend.service.RefreshTokenService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Value("${spring.datasource.url}")
    private String datasourceUrl;

    @PostConstruct
    public void printDatasource() {
        System.out.println("======================================");
        System.out.println("DATASOURCE URL : " + datasourceUrl);
        System.out.println("======================================");
    }

    private final UserRepository repository;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final RefreshTokenService refreshTokenService;

    public AuthenticationService(
            UserRepository repository,
            PasswordEncoder encoder,
            JwtService jwtService,
            AuthenticationManager authenticationManager,
            RefreshTokenService refreshTokenService) {

        this.repository = repository;
        this.encoder = encoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.refreshTokenService = refreshTokenService;
    }

    public String register(User user) {

        // Set default role if not provided
        if (user.getRole() == null) {
            user.setRole(Role.PATIENT);
        }

        // Use email as username if username is not provided
        if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            user.setUsername(user.getEmail());
        }

        // Encrypt password
        user.setPassword(encoder.encode(user.getPassword()));

        // Save user
        repository.save(user);

        return "User Registered Successfully";
    }

    public LoginResponse login(LoginRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String accessToken = jwtService.generateToken(
                org.springframework.security.core.userdetails.User
                        .withUsername(user.getEmail())
                        .password(user.getPassword())
                        .authorities("ROLE_" + user.getRole().name())
                        .build()
        );

        RefreshToken refreshToken = refreshTokenService.createRefreshToken(user);

        return new LoginResponse(
                accessToken,
                refreshToken.getToken()
        );
    }
}
