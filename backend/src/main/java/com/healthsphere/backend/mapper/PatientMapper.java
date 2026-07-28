package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.PatientRequest;
import com.healthsphere.backend.dto.PatientResponse;
import com.healthsphere.backend.entity.Patient;

public class PatientMapper {

    public static Patient toEntity(PatientRequest request) {
        Patient patient = new Patient();

        patient.setFirstName(request.getFirstName());
        patient.setLastName(request.getLastName());
        patient.setEmail(request.getEmail());
        patient.setPhone(request.getPhone());
        patient.setAge(request.getAge());
        patient.setGender(request.getGender());
        patient.setBloodGroup(request.getBloodGroup());
        patient.setAddress(request.getAddress());

        return patient;
    }

    public static PatientResponse toResponse(Patient patient) {
        PatientResponse response = new PatientResponse();

        response.setId(patient.getId());
        response.setFirstName(patient.getFirstName());
        response.setLastName(patient.getLastName());
        response.setEmail(patient.getEmail());
        response.setPhone(patient.getPhone());
        response.setAge(patient.getAge());
        response.setGender(patient.getGender());
        response.setBloodGroup(patient.getBloodGroup());
        response.setAddress(patient.getAddress());

        return response;
    }
}