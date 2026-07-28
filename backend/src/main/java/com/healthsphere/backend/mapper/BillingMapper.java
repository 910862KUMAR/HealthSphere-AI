package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.BillingResponse;
import com.healthsphere.backend.entity.Billing;
import org.springframework.stereotype.Component;

@Component
public class BillingMapper {

    public BillingResponse toResponse(Billing billing) {

        BillingResponse response = new BillingResponse();

        response.setId(billing.getId());
        response.setPatientId(billing.getPatient().getId());
        response.setConsultationFee(billing.getConsultationFee());
        response.setLaboratoryFee(billing.getLaboratoryFee());
        response.setMedicineFee(billing.getMedicineFee());
        response.setTotalAmount(billing.getTotalAmount());
        response.setPaymentStatus(billing.getPaymentStatus());

        return response;
    }
}