package com.healthsphere.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class LaboratoryRequest {

    @NotNull(message = "Medical Record ID is required")
    private Long medicalRecordId;

    @NotBlank(message = "Test Name is required")
    private String testName;

    @NotBlank(message = "Result is required")
    private String result;

    @NotBlank(message = "Status is required")
    private String status;

    private String remarks;

    public LaboratoryRequest() {
    }

    public Long getMedicalRecordId() {
        return medicalRecordId;
    }

    public void setMedicalRecordId(Long medicalRecordId) {
        this.medicalRecordId = medicalRecordId;
    }

    public String getTestName() {
        return testName;
    }

    public void setTestName(String testName) {
        this.testName = testName;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}