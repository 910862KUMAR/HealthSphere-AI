package com.healthsphere.backend.dto;

import jakarta.validation.constraints.NotNull;

public class BillingRequest {

    @NotNull(message = "Patient ID is required")
    private Long patientId;

    @NotNull(message = "Consultation Fee is required")
    private Double consultationFee;

    @NotNull(message = "Laboratory Fee is required")
    private Double laboratoryFee;

    @NotNull(message = "Medicine Fee is required")
    private Double medicineFee;

    @NotNull(message = "Payment Status is required")
    private String paymentStatus;

    public BillingRequest() {
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public Double getConsultationFee() {
        return consultationFee;
    }

    public void setConsultationFee(Double consultationFee) {
        this.consultationFee = consultationFee;
    }

    public Double getLaboratoryFee() {
        return laboratoryFee;
    }

    public void setLaboratoryFee(Double laboratoryFee) {
        this.laboratoryFee = laboratoryFee;
    }

    public Double getMedicineFee() {
        return medicineFee;
    }

    public void setMedicineFee(Double medicineFee) {
        this.medicineFee = medicineFee;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}