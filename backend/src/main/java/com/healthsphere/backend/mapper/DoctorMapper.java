package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.DoctorRequest;
import com.healthsphere.backend.dto.DoctorResponse;
import com.healthsphere.backend.entity.Doctor;

public class DoctorMapper {

    public static Doctor toEntity(DoctorRequest request) {

        Doctor doctor = new Doctor();

        doctor.setFirstName(request.getFirstName());
        doctor.setLastName(request.getLastName());
        doctor.setEmail(request.getEmail());
        doctor.setPhone(request.getPhone());
        doctor.setSpecialization(request.getSpecialization());
        doctor.setExperience(request.getExperience());
        doctor.setQualification(request.getQualification());
        doctor.setDepartment(request.getDepartment());

        return doctor;
    }

    public static DoctorResponse toResponse(Doctor doctor) {

        DoctorResponse response = new DoctorResponse();

        response.setId(doctor.getId());
        response.setFirstName(doctor.getFirstName());
        response.setLastName(doctor.getLastName());
        response.setEmail(doctor.getEmail());
        response.setPhone(doctor.getPhone());
        response.setSpecialization(doctor.getSpecialization());
        response.setExperience(doctor.getExperience());
        response.setQualification(doctor.getQualification());
        response.setDepartment(doctor.getDepartment());

        return response;
    }
}