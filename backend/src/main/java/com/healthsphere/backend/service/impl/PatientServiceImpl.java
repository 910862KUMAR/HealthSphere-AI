package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.PatientRequest;
import com.healthsphere.backend.dto.PatientResponse;
import com.healthsphere.backend.entity.Patient;
import com.healthsphere.backend.exception.ResourceNotFoundException;
import com.healthsphere.backend.mapper.PatientMapper;
import com.healthsphere.backend.repository.PatientRepository;
import com.healthsphere.backend.service.PatientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {

    private static final Logger logger =
            LoggerFactory.getLogger(PatientServiceImpl.class);

    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public PatientResponse createPatient(PatientRequest request) {

        logger.info("Creating new patient");

        Patient patient = PatientMapper.toEntity(request);

        Patient savedPatient = patientRepository.save(patient);

        logger.info("Patient created successfully with ID: {}", savedPatient.getId());

        return PatientMapper.toResponse(savedPatient);
    }

    @Override
    public List<PatientResponse> getAllPatients() {

        logger.info("Fetching all patients");

        return patientRepository.findAll()
                .stream()
                .map(PatientMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public PatientResponse getPatientById(Long id) {

        logger.info("Fetching patient with ID: {}", id);

        Patient patient = patientRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Patient not found with ID: " + id));

        return PatientMapper.toResponse(patient);
    }

    @Override
    public PatientResponse updatePatient(Long id, PatientRequest request) {

        logger.info("Updating patient with ID: {}", id);

        Patient patient = patientRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Patient not found with ID: " + id));

        patient.setFirstName(request.getFirstName());
        patient.setLastName(request.getLastName());
        patient.setEmail(request.getEmail());
        patient.setPhone(request.getPhone());
        patient.setAge(request.getAge());
        patient.setGender(request.getGender());
        patient.setBloodGroup(request.getBloodGroup());
        patient.setAddress(request.getAddress());

        Patient updatedPatient = patientRepository.save(patient);

        logger.info("Patient updated successfully with ID: {}", updatedPatient.getId());

        return PatientMapper.toResponse(updatedPatient);
    }

    @Override
    public void deletePatient(Long id) {

        logger.info("Deleting patient with ID: {}", id);

        Patient patient = patientRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Patient not found with ID: " + id));

        patientRepository.delete(patient);

        logger.info("Patient deleted successfully with ID: {}", id);
    }
}