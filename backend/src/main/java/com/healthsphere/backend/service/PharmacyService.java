package com.healthsphere.backend.service;

import com.healthsphere.backend.dto.PharmacyRequest;
import com.healthsphere.backend.dto.PharmacyResponse;

import java.util.List;

public interface PharmacyService {

    PharmacyResponse createPharmacy(PharmacyRequest request);

    List<PharmacyResponse> getAllPharmacies();

    PharmacyResponse getPharmacyById(Long id);

    PharmacyResponse updatePharmacy(Long id, PharmacyRequest request);

    void deletePharmacy(Long id);
}