package com.healthsphere.backend.auth;

import com.healthsphere.backend.entity.User;
import com.healthsphere.backend.entity.RefreshToken;
import com.healthsphere.backend.security.JwtService;
import com.healthsphere.backend.service.RefreshTokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;

    public AuthenticationController(
            AuthenticationService authenticationService,
            RefreshTokenService refreshTokenService,
            JwtService jwtService) {

        this.authenticationService = authenticationService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody User user) {

        return ResponseEntity.ok(
                authenticationService.register(user));
    }

    @PostMapping("/login")
        public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request) {

                return ResponseEntity.ok(
                                authenticationService.login(request));
    }

    @PostMapping("/refresh")
    public ResponseEntity<RefreshTokenResponse> refreshToken(
            @RequestBody RefreshTokenRequest request) {

        RefreshToken refreshToken = refreshTokenService
                .findByToken(request.getRefreshToken())
                .map(refreshTokenService::verifyExpiration)
                .orElseThrow(() ->
                        new RuntimeException("Invalid refresh token"));

        User user = refreshToken.getUser();

        UserDetails userDetails =
                org.springframework.security.core.userdetails.User
                        .withUsername(user.getUsername())
                        .password(user.getPassword())
                        .authorities("ROLE_" + user.getRole())
                        .build();

        String accessToken =
                jwtService.generateAccessToken(userDetails);

        return ResponseEntity.ok(
                new RefreshTokenResponse(
                        accessToken,
                        refreshToken.getToken()
                )
        );
    }
}