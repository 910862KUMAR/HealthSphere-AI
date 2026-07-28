package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.LaboratoryRequest;
import com.healthsphere.backend.dto.LaboratoryResponse;
import com.healthsphere.backend.entity.Laboratory;
import com.healthsphere.backend.entity.MedicalRecord;
import com.healthsphere.backend.exception.ResourceNotFoundException;
import com.healthsphere.backend.mapper.LaboratoryMapper;
import com.healthsphere.backend.repository.LaboratoryRepository;
import com.healthsphere.backend.repository.MedicalRecordRepository;
import com.healthsphere.backend.service.LaboratoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class LaboratoryServiceImpl implements LaboratoryService {

    private final LaboratoryRepository laboratoryRepository;
    private final MedicalRecordRepository medicalRecordRepository;
    private final LaboratoryMapper mapper;

    @Override
    public LaboratoryResponse createLaboratory(LaboratoryRequest request) {

        MedicalRecord medicalRecord = medicalRecordRepository.findById(request.getMedicalRecordId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical Record not found"));

        Laboratory laboratory = new Laboratory();

        laboratory.setMedicalRecord(medicalRecord);
        laboratory.setTestName(request.getTestName());
        laboratory.setResult(request.getResult());
        laboratory.setStatus(request.getStatus());
        laboratory.setRemarks(request.getRemarks());

        Laboratory saved = laboratoryRepository.save(laboratory);

        log.info("Laboratory Test created successfully with ID {}", saved.getId());

        return mapper.toResponse(saved);
    }

    @Override
    public List<LaboratoryResponse> getAllLaboratories() {

        return laboratoryRepository.findAll()
                .stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public LaboratoryResponse getLaboratoryById(Long id) {

        Laboratory laboratory = laboratoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory Test not found"));

        return mapper.toResponse(laboratory);
    }

    @Override
    public LaboratoryResponse updateLaboratory(Long id, LaboratoryRequest request) {

        Laboratory laboratory = laboratoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory Test not found"));

        MedicalRecord medicalRecord = medicalRecordRepository.findById(request.getMedicalRecordId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical Record not found"));

        laboratory.setMedicalRecord(medicalRecord);
        laboratory.setTestName(request.getTestName());
        laboratory.setResult(request.getResult());
        laboratory.setStatus(request.getStatus());
        laboratory.setRemarks(request.getRemarks());

        Laboratory updated = laboratoryRepository.save(laboratory);

        log.info("Laboratory Test updated successfully with ID {}", id);

        return mapper.toResponse(updated);
    }

    @Override
    public void deleteLaboratory(Long id) {

        Laboratory laboratory = laboratoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory Test not found"));

        laboratoryRepository.delete(laboratory);

        log.info("Laboratory Test deleted successfully with ID {}", id);
    }
}