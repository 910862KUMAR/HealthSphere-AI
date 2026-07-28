package com.healthsphere.backend.mapper;

import com.healthsphere.backend.dto.AppointmentResponse;
import com.healthsphere.backend.entity.Appointment;

public class AppointmentMapper {

    public static AppointmentResponse toResponse(Appointment appointment) {

        AppointmentResponse response = new AppointmentResponse();

        response.setId(appointment.getId());

        response.setPatientId(appointment.getPatient().getId());
        response.setPatientName(
                appointment.getPatient().getFirstName() + " "
                        + appointment.getPatient().getLastName());

        response.setDoctorId(appointment.getDoctor().getId());
        response.setDoctorName(
                appointment.getDoctor().getFirstName() + " "
                        + appointment.getDoctor().getLastName());

        response.setAppointmentDate(appointment.getAppointmentDate());
        response.setAppointmentTime(appointment.getAppointmentTime());
        response.setReason(appointment.getReason());
        response.setStatus(appointment.getStatus());

        return response;
    }
}