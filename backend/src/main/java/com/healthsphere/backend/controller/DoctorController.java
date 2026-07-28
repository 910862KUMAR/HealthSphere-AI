package com.healthsphere.backend.controller;

import com.healthsphere.backend.dto.DoctorRequest;
import com.healthsphere.backend.dto.DoctorResponse;
import com.healthsphere.backend.service.DoctorService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    // Create Doctor
    @PostMapping
    public DoctorResponse createDoctor(
            @Valid @RequestBody DoctorRequest request) {

        return doctorService.createDoctor(request);
    }

    // Get All Doctors
    @GetMapping
    public List<DoctorResponse> getAllDoctors() {

        return doctorService.getAllDoctors();
    }

    // Get Doctor By ID
    @GetMapping("/{id}")
    public DoctorResponse getDoctorById(@PathVariable Long id) {

        return doctorService.getDoctorById(id);
    }

    // Update Doctor
    @PutMapping("/{id}")
    public DoctorResponse updateDoctor(
            @PathVariable Long id,
            @Valid @RequestBody DoctorRequest request) {

        return doctorService.updateDoctor(id, request);
    }

    // Delete Doctor
    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable Long id) {

        doctorService.deleteDoctor(id);

        return "Doctor deleted successfully";
    }
}