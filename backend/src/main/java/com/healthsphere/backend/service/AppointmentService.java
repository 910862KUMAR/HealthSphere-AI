package com.healthsphere.backend.service;

import com.healthsphere.backend.dto.AppointmentRequest;
import com.healthsphere.backend.dto.AppointmentResponse;

import java.util.List;

public interface AppointmentService {

    AppointmentResponse createAppointment(AppointmentRequest request);

    List<AppointmentResponse> getAllAppointments();

    AppointmentResponse getAppointmentById(Long id);

    AppointmentResponse updateAppointment(Long id,
                                          AppointmentRequest request);

    void deleteAppointment(Long id);
}