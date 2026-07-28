package com.healthsphere.backend.service.impl;

import com.healthsphere.backend.dto.BillingRequest;
import com.healthsphere.backend.dto.BillingResponse;
import com.healthsphere.backend.entity.Billing;
import com.healthsphere.backend.entity.Patient;
import com.healthsphere.backend.exception.ResourceNotFoundException;
import com.healthsphere.backend.mapper.BillingMapper;
import com.healthsphere.backend.repository.BillingRepository;
import com.healthsphere.backend.repository.PatientRepository;
import com.healthsphere.backend.service.BillingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BillingServiceImpl implements BillingService {

    private final BillingRepository billingRepository;
    private final PatientRepository patientRepository;
    private final BillingMapper mapper;

    @Override
    public BillingResponse createBilling(BillingRequest request) {

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found"));

        Billing billing = new Billing();

        billing.setPatient(patient);
        billing.setConsultationFee(request.getConsultationFee());
        billing.setLaboratoryFee(request.getLaboratoryFee());
        billing.setMedicineFee(request.getMedicineFee());

        double total = request.getConsultationFee()
                + request.getLaboratoryFee()
                + request.getMedicineFee();

        billing.setTotalAmount(total);
        billing.setPaymentStatus(request.getPaymentStatus());

        Billing saved = billingRepository.save(billing);

        log.info("Billing created successfully with ID {}", saved.getId());

        return mapper.toResponse(saved);
    }

    @Override
    public List<BillingResponse> getAllBillings() {

        return billingRepository.findAll()
                .stream()
                .map(mapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public BillingResponse getBillingById(Long id) {

        Billing billing = billingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Billing not found"));

        return mapper.toResponse(billing);
    }

    @Override
    public BillingResponse updateBilling(Long id, BillingRequest request) {

        Billing billing = billingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Billing not found"));

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found"));

        billing.setPatient(patient);
        billing.setConsultationFee(request.getConsultationFee());
        billing.setLaboratoryFee(request.getLaboratoryFee());
        billing.setMedicineFee(request.getMedicineFee());

        double total = request.getConsultationFee()
                + request.getLaboratoryFee()
                + request.getMedicineFee();

        billing.setTotalAmount(total);
        billing.setPaymentStatus(request.getPaymentStatus());

        Billing updated = billingRepository.save(billing);

        log.info("Billing updated successfully with ID {}", id);

        return mapper.toResponse(updated);
    }

    @Override
    public void deleteBilling(Long id) {

        Billing billing = billingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Billing not found"));

        billingRepository.delete(billing);

        log.info("Billing deleted successfully with ID {}", id);
    }
}