package com.healthsphere.backend.service;

import com.healthsphere.backend.dto.MedicalRecordRequest;
import com.healthsphere.backend.dto.MedicalRecordResponse;

import java.util.List;

public interface MedicalRecordService {

    MedicalRecordResponse createMedicalRecord(MedicalRecordRequest request);

    List<MedicalRecordResponse> getAllMedicalRecords();

    MedicalRecordResponse getMedicalRecordById(Long id);

    MedicalRecordResponse updateMedicalRecord(Long id,
                                              MedicalRecordRequest request);

    void deleteMedicalRecord(Long id);
}