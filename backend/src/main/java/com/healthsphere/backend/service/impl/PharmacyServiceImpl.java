package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.PharmacyRequest;
import com.healthsphere.backend.dto.PharmacyResponse;
import com.healthsphere.backend.entity.Pharmacy;
import com.healthsphere.backend.exception.ResourceNotFoundException;
import com.healthsphere.backend.mapper.PharmacyMapper;
import com.healthsphere.backend.repository.PharmacyRepository;
import com.healthsphere.backend.service.PharmacyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PharmacyServiceImpl implements PharmacyService {

    private final PharmacyRepository pharmacyRepository;
    private final PharmacyMapper mapper;

    @Override
    public PharmacyResponse createPharmacy(PharmacyRequest request) {

        Pharmacy pharmacy = new Pharmacy();

        pharmacy.setMedicineName(request.getMedicineName());
        pharmacy.setManufacturer(request.getManufacturer());
        pharmacy.setQuantity(request.getQuantity());
        pharmacy.setPrice(request.getPrice());
        pharmacy.setExpiryDate(request.getExpiryDate());

        Pharmacy saved = pharmacyRepository.save(pharmacy);

        log.info("Medicine added successfully with ID {}", saved.getId());

        return mapper.toResponse(saved);
    }

    @Override
    public List<PharmacyResponse> getAllPharmacies() {

        return pharmacyRepository.findAll()
                .stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public PharmacyResponse getPharmacyById(Long id) {

        Pharmacy pharmacy = pharmacyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found"));

        return mapper.toResponse(pharmacy);
    }

    @Override
    public PharmacyResponse updatePharmacy(Long id, PharmacyRequest request) {

        Pharmacy pharmacy = pharmacyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found"));

        pharmacy.setMedicineName(request.getMedicineName());
        pharmacy.setManufacturer(request.getManufacturer());
        pharmacy.setQuantity(request.getQuantity());
        pharmacy.setPrice(request.getPrice());
        pharmacy.setExpiryDate(request.getExpiryDate());

        Pharmacy updated = pharmacyRepository.save(pharmacy);

        log.info("Medicine updated successfully with ID {}", id);

        return mapper.toResponse(updated);
    }

    @Override
    public void deletePharmacy(Long id) {

        Pharmacy pharmacy = pharmacyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Medicine not found"));

        pharmacyRepository.delete(pharmacy);

        log.info("Medicine deleted successfully with ID {}", id);
    }
}