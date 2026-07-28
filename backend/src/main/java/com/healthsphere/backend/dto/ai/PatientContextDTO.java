package com.healthsphere.backend.dto.ai;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientContextDTO {

    private Long patientId;

    private String patientName;

    private Integer age;

    private String gender;

    private String bloodGroup;

    private String email;

    private String phone;

    private String address;

}