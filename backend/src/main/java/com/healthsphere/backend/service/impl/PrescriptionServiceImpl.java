package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.PrescriptionRequest;
import com.healthsphere.backend.dto.PrescriptionResponse;
import com.healthsphere.backend.entity.MedicalRecord;
import com.healthsphere.backend.entity.Prescription;
import com.healthsphere.backend.exception.ResourceNotFoundException;
import com.healthsphere.backend.mapper.PrescriptionMapper;
import com.healthsphere.backend.repository.MedicalRecordRepository;
import com.healthsphere.backend.repository.PrescriptionRepository;
import com.healthsphere.backend.service.PrescriptionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class PrescriptionServiceImpl implements PrescriptionService {

    private final PrescriptionRepository prescriptionRepository;
    private final MedicalRecordRepository medicalRecordRepository;
    private final PrescriptionMapper mapper;

    @Override
    public PrescriptionResponse createPrescription(PrescriptionRequest request) {

        MedicalRecord medicalRecord = medicalRecordRepository.findById(request.getMedicalRecordId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical Record not found"));

        Prescription prescription = new Prescription();

        prescription.setMedicalRecord(medicalRecord);
        prescription.setMedicineName(request.getMedicineName());
        prescription.setDosage(request.getDosage());
        prescription.setFrequency(request.getFrequency());
        prescription.setDuration(request.getDuration());
        prescription.setInstructions(request.getInstructions());

        Prescription saved = prescriptionRepository.save(prescription);

        log.info("Prescription created successfully with ID {}", saved.getId());

        return mapper.toResponse(saved);
    }

    @Override
    public List<PrescriptionResponse> getAllPrescriptions() {

        return prescriptionRepository.findAll()
                .stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public PrescriptionResponse getPrescriptionById(Long id) {

        Prescription prescription = prescriptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Prescription not found"));

        return mapper.toResponse(prescription);
    }

    @Override
    public PrescriptionResponse updatePrescription(Long id, PrescriptionRequest request) {

        Prescription prescription = prescriptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Prescription not found"));

        MedicalRecord medicalRecord = medicalRecordRepository.findById(request.getMedicalRecordId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical Record not found"));

        prescription.setMedicalRecord(medicalRecord);
        prescription.setMedicineName(request.getMedicineName());
        prescription.setDosage(request.getDosage());
        prescription.setFrequency(request.getFrequency());
        prescription.setDuration(request.getDuration());
        prescription.setInstructions(request.getInstructions());

        Prescription updated = prescriptionRepository.save(prescription);

        log.info("Prescription updated successfully with ID {}", id);

        return mapper.toResponse(updated);
    }

    @Override
    public void deletePrescription(Long id) {

        Prescription prescription = prescriptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Prescription not found"));

        prescriptionRepository.delete(prescription);

        log.info("Prescription deleted successfully with ID {}", id);
    }
}