package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.MedicalRecordResponse;
import com.healthsphere.backend.entity.MedicalRecord;
import org.springframework.stereotype.Component;

@Component
public class MedicalRecordMapper {

    public MedicalRecordResponse toResponse(MedicalRecord medicalRecord) {

        MedicalRecordResponse response = new MedicalRecordResponse();

        response.setId(medicalRecord.getId());

        response.setPatientId(medicalRecord.getPatient().getId());
        response.setPatientName(
                medicalRecord.getPatient().getFirstName() + " " +
                medicalRecord.getPatient().getLastName()
        );

        response.setDoctorId(medicalRecord.getDoctor().getId());
        response.setDoctorName(
                medicalRecord.getDoctor().getFirstName() + " " +
                medicalRecord.getDoctor().getLastName()
        );

        response.setDiagnosis(medicalRecord.getDiagnosis());
        response.setTreatment(medicalRecord.getTreatment());
        response.setMedications(medicalRecord.getMedications());
        response.setAllergies(medicalRecord.getAllergies());
        response.setNotes(medicalRecord.getNotes());
        response.setVisitDate(medicalRecord.getVisitDate());

        return response;
    }
}