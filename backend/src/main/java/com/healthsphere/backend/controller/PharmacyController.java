package com.healthsphere.backend.controller;

import com.healthsphere.backend.dto.PharmacyRequest;
import com.healthsphere.backend.dto.PharmacyResponse;
import com.healthsphere.backend.service.PharmacyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pharmacy")
@RequiredArgsConstructor
public class PharmacyController {

    private final PharmacyService pharmacyService;

    @PostMapping
    public ResponseEntity<PharmacyResponse> createPharmacy(
            @Valid @RequestBody PharmacyRequest request) {

        return new ResponseEntity<>(
                pharmacyService.createPharmacy(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PharmacyResponse>> getAllPharmacies() {

        return ResponseEntity.ok(
                pharmacyService.getAllPharmacies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PharmacyResponse> getPharmacyById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                pharmacyService.getPharmacyById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PharmacyResponse> updatePharmacy(
            @PathVariable Long id,
            @Valid @RequestBody PharmacyRequest request) {

        return ResponseEntity.ok(
                pharmacyService.updatePharmacy(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePharmacy(
            @PathVariable Long id) {

        pharmacyService.deletePharmacy(id);

        return ResponseEntity.ok("Medicine deleted successfully.");
    }
}