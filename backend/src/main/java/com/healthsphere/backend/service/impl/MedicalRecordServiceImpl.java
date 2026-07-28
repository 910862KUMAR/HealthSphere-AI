package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.MedicalRecordRequest;
import com.healthsphere.backend.dto.MedicalRecordResponse;
import com.healthsphere.backend.entity.Doctor;
import com.healthsphere.backend.entity.MedicalRecord;
import com.healthsphere.backend.entity.Patient;
import com.healthsphere.backend.exception.ResourceNotFoundException;
import com.healthsphere.backend.mapper.MedicalRecordMapper;
import com.healthsphere.backend.repository.DoctorRepository;
import com.healthsphere.backend.repository.MedicalRecordRepository;
import com.healthsphere.backend.repository.PatientRepository;
import com.healthsphere.backend.service.MedicalRecordService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class MedicalRecordServiceImpl implements MedicalRecordService {

    private final MedicalRecordRepository medicalRecordRepository;
    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final MedicalRecordMapper mapper;

    @Override
    public MedicalRecordResponse createMedicalRecord(MedicalRecordRequest request) {

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found"));

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));

        MedicalRecord medicalRecord = new MedicalRecord();

        medicalRecord.setPatient(patient);
        medicalRecord.setDoctor(doctor);
        medicalRecord.setDiagnosis(request.getDiagnosis());
        medicalRecord.setTreatment(request.getTreatment());
        medicalRecord.setMedications(request.getMedications());
        medicalRecord.setAllergies(request.getAllergies());
        medicalRecord.setNotes(request.getNotes());
        medicalRecord.setVisitDate(request.getVisitDate());

        MedicalRecord savedRecord = medicalRecordRepository.save(medicalRecord);

        log.info("Medical Record created successfully with ID {}", savedRecord.getId());

        return mapper.toResponse(savedRecord);
    }

    @Override
    public List<MedicalRecordResponse> getAllMedicalRecords() {

        return medicalRecordRepository.findAll()
                .stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public MedicalRecordResponse getMedicalRecordById(Long id) {

        MedicalRecord medicalRecord = medicalRecordRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Medical Record not found"));

        return mapper.toResponse(medicalRecord);
    }

    @Override
    public MedicalRecordResponse updateMedicalRecord(Long id,
                                                     MedicalRecordRequest request) {

        MedicalRecord medicalRecord = medicalRecordRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Medical Record not found"));

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found"));

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));

        medicalRecord.setPatient(patient);
        medicalRecord.setDoctor(doctor);
        medicalRecord.setDiagnosis(request.getDiagnosis());
        medicalRecord.setTreatment(request.getTreatment());
        medicalRecord.setMedications(request.getMedications());
        medicalRecord.setAllergies(request.getAllergies());
        medicalRecord.setNotes(request.getNotes());
        medicalRecord.setVisitDate(request.getVisitDate());

        MedicalRecord updatedRecord = medicalRecordRepository.save(medicalRecord);

        log.info("Medical Record updated successfully with ID {}", id);

        return mapper.toResponse(updatedRecord);
    }

    @Override
    public void deleteMedicalRecord(Long id) {

        MedicalRecord medicalRecord = medicalRecordRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Medical Record not found"));

        medicalRecordRepository.delete(medicalRecord);

        log.info("Medical Record deleted successfully with ID {}", id);
    }
}