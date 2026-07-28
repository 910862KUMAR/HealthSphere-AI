package com.healthsphere.backend.controller;

import com.healthsphere.backend.dto.BillingRequest;
import com.healthsphere.backend.dto.BillingResponse;
import com.healthsphere.backend.service.BillingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/billing")
@RequiredArgsConstructor
public class BillingController {

    private final BillingService billingService;

    @PostMapping
    public ResponseEntity<BillingResponse> createBilling(
            @Valid @RequestBody BillingRequest request) {

        return new ResponseEntity<>(
                billingService.createBilling(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<BillingResponse>> getAllBillings() {

        return ResponseEntity.ok(
                billingService.getAllBillings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BillingResponse> getBillingById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                billingService.getBillingById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BillingResponse> updateBilling(
            @PathVariable Long id,
            @Valid @RequestBody BillingRequest request) {

        return ResponseEntity.ok(
                billingService.updateBilling(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBilling(
            @PathVariable Long id) {

        billingService.deleteBilling(id);

        return ResponseEntity.ok("Billing deleted successfully.");
    }
}