package com.healthsphere.backend.dto;

import lombok.Data;

@Data
public class PatientResponse {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Integer age;
    private String gender;
    private String bloodGroup;
    private String address;
}