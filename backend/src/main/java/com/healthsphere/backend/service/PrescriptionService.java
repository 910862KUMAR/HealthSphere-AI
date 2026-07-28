package com.healthsphere.backend.service;

import com.healthsphere.backend.dto.PrescriptionRequest;
import com.healthsphere.backend.dto.PrescriptionResponse;

import java.util.List;

public interface PrescriptionService {

    PrescriptionResponse createPrescription(PrescriptionRequest request);

    List<PrescriptionResponse> getAllPrescriptions();

    PrescriptionResponse getPrescriptionById(Long id);

    PrescriptionResponse updatePrescription(Long id, PrescriptionRequest request);

    void deletePrescription(Long id);
}