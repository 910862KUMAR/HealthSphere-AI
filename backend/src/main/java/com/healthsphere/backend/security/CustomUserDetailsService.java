package com.healthsphere.backend.security;

import com.healthsphere.backend.entity.User;
import com.healthsphere.backend.repository.UserRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository repository;

    public CustomUserDetailsService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        User user = repository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with email: " + email));

        // ================= DEBUG LOGS =================
        System.out.println("======================================");
        System.out.println("ID            : " + user.getId());
        System.out.println("EMAIL         : " + user.getEmail());
        System.out.println("USERNAME      : " + user.getUsername());
        System.out.println("ROLE          : " + user.getRole());
        System.out.println("AUTHORITIES   : ROLE_" + user.getRole().name());
        System.out.println("======================================");
        // ==============================================

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                List.of(
                        new SimpleGrantedAuthority(
                                "ROLE_" + user.getRole().name()
                        )
                )
        );
    }
}
