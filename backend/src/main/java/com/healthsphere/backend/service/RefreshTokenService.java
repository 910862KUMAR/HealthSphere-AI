package com.healthsphere.backend.service;

import com.healthsphere.backend.entity.RefreshToken;
import com.healthsphere.backend.entity.User;

import java.util.Optional;

public interface RefreshTokenService {

    RefreshToken createRefreshToken(User user);

    Optional<RefreshToken> findByToken(String token);

    RefreshToken verifyExpiration(RefreshToken refreshToken);

    void deleteByUser(User user);

}