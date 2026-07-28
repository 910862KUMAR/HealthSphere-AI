package com.healthsphere.backend.dto;

public class DashboardSummaryResponse {

    private Long totalPatients;
    private Long totalDoctors;
    private Long totalAppointments;
    private Long totalMedicalRecords;
    private Long totalPrescriptions;
    private Long totalLaboratories;
    private Long totalPharmacies;
    private Long totalBills;

    public DashboardSummaryResponse() {
    }

    public DashboardSummaryResponse(
            Long totalPatients,
            Long totalDoctors,
            Long totalAppointments,
            Long totalMedicalRecords,
            Long totalPrescriptions,
            Long totalLaboratories,
            Long totalPharmacies,
            Long totalBills) {

        this.totalPatients = totalPatients;
        this.totalDoctors = totalDoctors;
        this.totalAppointments = totalAppointments;
        this.totalMedicalRecords = totalMedicalRecords;
        this.totalPrescriptions = totalPrescriptions;
        this.totalLaboratories = totalLaboratories;
        this.totalPharmacies = totalPharmacies;
        this.totalBills = totalBills;
    }

    public Long getTotalPatients() {
        return totalPatients;
    }

    public void setTotalPatients(Long totalPatients) {
        this.totalPatients = totalPatients;
    }

    public Long getTotalDoctors() {
        return totalDoctors;
    }

    public void setTotalDoctors(Long totalDoctors) {
        this.totalDoctors = totalDoctors;
    }

    public Long getTotalAppointments() {
        return totalAppointments;
    }

    public void setTotalAppointments(Long totalAppointments) {
        this.totalAppointments = totalAppointments;
    }

    public Long getTotalMedicalRecords() {
        return totalMedicalRecords;
    }

    public void setTotalMedicalRecords(Long totalMedicalRecords) {
        this.totalMedicalRecords = totalMedicalRecords;
    }

    public Long getTotalPrescriptions() {
        return totalPrescriptions;
    }

    public void setTotalPrescriptions(Long totalPrescriptions) {
        this.totalPrescriptions = totalPrescriptions;
    }

    public Long getTotalLaboratories() {
        return totalLaboratories;
    }

    public void setTotalLaboratories(Long totalLaboratories) {
        this.totalLaboratories = totalLaboratories;
    }

    public Long getTotalPharmacies() {
        return totalPharmacies;
    }

    public void setTotalPharmacies(Long totalPharmacies) {
        this.totalPharmacies = totalPharmacies;
    }

    public Long getTotalBills() {
        return totalBills;
    }

    public void setTotalBills(Long totalBills) {
        this.totalBills = totalBills;
    }
}