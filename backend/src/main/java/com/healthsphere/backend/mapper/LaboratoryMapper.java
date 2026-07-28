package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.LaboratoryResponse;
import com.healthsphere.backend.entity.Laboratory;
import org.springframework.stereotype.Component;

@Component
public class LaboratoryMapper {

    public LaboratoryResponse toResponse(Laboratory laboratory) {

        LaboratoryResponse response = new LaboratoryResponse();

        response.setId(laboratory.getId());
        response.setMedicalRecordId(laboratory.getMedicalRecord().getId());
        response.setTestName(laboratory.getTestName());
        response.setResult(laboratory.getResult());
        response.setStatus(laboratory.getStatus());
        response.setRemarks(laboratory.getRemarks());

        return response;
    }
}