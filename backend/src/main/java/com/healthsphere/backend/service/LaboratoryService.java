package com.healthsphere.backend.service;

import com.healthsphere.backend.dto.LaboratoryRequest;
import com.healthsphere.backend.dto.LaboratoryResponse;

import java.util.List;

public interface LaboratoryService {

    LaboratoryResponse createLaboratory(LaboratoryRequest request);

    List<LaboratoryResponse> getAllLaboratories();

    LaboratoryResponse getLaboratoryById(Long id);

    LaboratoryResponse updateLaboratory(Long id, LaboratoryRequest request);

    void deleteLaboratory(Long id);
}