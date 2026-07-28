package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.DashboardSummaryResponse;
import com.healthsphere.backend.repository.AppointmentRepository;
import com.healthsphere.backend.repository.BillingRepository;
import com.healthsphere.backend.repository.DoctorRepository;
import com.healthsphere.backend.repository.LaboratoryRepository;
import com.healthsphere.backend.repository.MedicalRecordRepository;
import com.healthsphere.backend.repository.PatientRepository;
import com.healthsphere.backend.repository.PharmacyRepository;
import com.healthsphere.backend.repository.PrescriptionRepository;
import com.healthsphere.backend.service.DashboardService;
import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;
    private final AppointmentRepository appointmentRepository;
    private final MedicalRecordRepository medicalRecordRepository;
    private final PrescriptionRepository prescriptionRepository;
    private final LaboratoryRepository laboratoryRepository;
    private final PharmacyRepository pharmacyRepository;
    private final BillingRepository billingRepository;

    public DashboardServiceImpl(
            PatientRepository patientRepository,
            DoctorRepository doctorRepository,
            AppointmentRepository appointmentRepository,
            MedicalRecordRepository medicalRecordRepository,
            PrescriptionRepository prescriptionRepository,
            LaboratoryRepository laboratoryRepository,
            PharmacyRepository pharmacyRepository,
            BillingRepository billingRepository) {

        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.appointmentRepository = appointmentRepository;
        this.medicalRecordRepository = medicalRecordRepository;
        this.prescriptionRepository = prescriptionRepository;
        this.laboratoryRepository = laboratoryRepository;
        this.pharmacyRepository = pharmacyRepository;
        this.billingRepository = billingRepository;
    }

    @Override
    public DashboardSummaryResponse getDashboardSummary() {

        return new DashboardSummaryResponse(

                patientRepository.count(),

                doctorRepository.count(),

                appointmentRepository.count(),

                medicalRecordRepository.count(),

                prescriptionRepository.count(),

                laboratoryRepository.count(),

                pharmacyRepository.count(),

                billingRepository.count()
        );
    }
}