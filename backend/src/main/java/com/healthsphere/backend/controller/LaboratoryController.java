package com.healthsphere.backend.controller;

import com.healthsphere.backend.dto.LaboratoryRequest;
import com.healthsphere.backend.dto.LaboratoryResponse;
import com.healthsphere.backend.service.LaboratoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/laboratories")
@RequiredArgsConstructor
public class LaboratoryController {

    private final LaboratoryService laboratoryService;

    @PostMapping
    public ResponseEntity<LaboratoryResponse> createLaboratory(
            @Valid @RequestBody LaboratoryRequest request) {

        return new ResponseEntity<>(
                laboratoryService.createLaboratory(request),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<LaboratoryResponse>> getAllLaboratories() {

        return ResponseEntity.ok(
                laboratoryService.getAllLaboratories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LaboratoryResponse> getLaboratoryById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                laboratoryService.getLaboratoryById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<LaboratoryResponse> updateLaboratory(
            @PathVariable Long id,
            @Valid @RequestBody LaboratoryRequest request) {

        return ResponseEntity.ok(
                laboratoryService.updateLaboratory(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLaboratory(
            @PathVariable Long id) {

        laboratoryService.deleteLaboratory(id);

        return ResponseEntity.ok("Laboratory Test deleted successfully.");
    }
}