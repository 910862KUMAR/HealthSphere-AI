package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.DoctorRequest;
import com.healthsphere.backend.dto.DoctorResponse;
import com.healthsphere.backend.entity.Doctor;
import com.healthsphere.backend.exception.ResourceNotFoundException;
import com.healthsphere.backend.mapper.DoctorMapper;
import com.healthsphere.backend.repository.DoctorRepository;
import com.healthsphere.backend.service.DoctorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    private static final Logger logger =
            LoggerFactory.getLogger(DoctorServiceImpl.class);

    private final DoctorRepository doctorRepository;

    public DoctorServiceImpl(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @Override
    public DoctorResponse createDoctor(DoctorRequest request) {

        logger.info("Creating new doctor");

        Doctor doctor = DoctorMapper.toEntity(request);

        Doctor savedDoctor = doctorRepository.save(doctor);

        logger.info("Doctor created successfully with ID: {}", savedDoctor.getId());

        return DoctorMapper.toResponse(savedDoctor);
    }

    @Override
    public List<DoctorResponse> getAllDoctors() {

        logger.info("Fetching all doctors");

        return doctorRepository.findAll()
                .stream()
                .map(DoctorMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public DoctorResponse getDoctorById(Long id) {

        logger.info("Fetching doctor with ID: {}", id);

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Doctor not found with ID: " + id));

        return DoctorMapper.toResponse(doctor);
    }

    @Override
    public DoctorResponse updateDoctor(Long id, DoctorRequest request) {

        logger.info("Updating doctor with ID: {}", id);

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Doctor not found with ID: " + id));

        doctor.setFirstName(request.getFirstName());
        doctor.setLastName(request.getLastName());
        doctor.setEmail(request.getEmail());
        doctor.setPhone(request.getPhone());
        doctor.setSpecialization(request.getSpecialization());
        doctor.setExperience(request.getExperience());
        doctor.setQualification(request.getQualification());
        doctor.setDepartment(request.getDepartment());

        Doctor updatedDoctor = doctorRepository.save(doctor);

        logger.info("Doctor updated successfully with ID: {}", updatedDoctor.getId());

        return DoctorMapper.toResponse(updatedDoctor);
    }

    @Override
    public void deleteDoctor(Long id) {

        logger.info("Deleting doctor with ID: {}", id);

        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Doctor not found with ID: " + id));

        doctorRepository.delete(doctor);

        logger.info("Doctor deleted successfully with ID: {}", id);
    }
}