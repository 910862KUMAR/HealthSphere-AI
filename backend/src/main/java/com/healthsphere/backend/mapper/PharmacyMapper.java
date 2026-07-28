package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.PharmacyResponse;
import com.healthsphere.backend.entity.Pharmacy;
import org.springframework.stereotype.Component;

@Component
public class PharmacyMapper {

    public PharmacyResponse toResponse(Pharmacy pharmacy) {

        PharmacyResponse response = new PharmacyResponse();

        response.setId(pharmacy.getId());
        response.setMedicineName(pharmacy.getMedicineName());
        response.setManufacturer(pharmacy.getManufacturer());
        response.setQuantity(pharmacy.getQuantity());
        response.setPrice(pharmacy.getPrice());
        response.setExpiryDate(pharmacy.getExpiryDate());

        return response;
    }
}