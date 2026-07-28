package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.PrescriptionResponse;
import com.healthsphere.backend.entity.Prescription;
import org.springframework.stereotype.Component;

@Component
public class PrescriptionMapper {

    public PrescriptionResponse toResponse(Prescription prescription) {

        PrescriptionResponse response = new PrescriptionResponse();

        response.setId(prescription.getId());

        response.setMedicalRecordId(
                prescription.getMedicalRecord().getId());

        response.setMedicineName(
                prescription.getMedicineName());

        response.setDosage(
                prescription.getDosage());

        response.setFrequency(
                prescription.getFrequency());

        response.setDuration(
                prescription.getDuration());

        response.setInstructions(
                prescription.getInstructions());

        return response;
    }
}