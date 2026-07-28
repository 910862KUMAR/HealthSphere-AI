package com.healthsphere.backend.util.ai;

import com.healthsphere.backend.dto.ai.PatientContextDTO;

public final class PromptBuilder {

    private PromptBuilder() {
    }

    public static String buildHealthPrompt(String userMessage,
                                           PatientContextDTO patient) {

        StringBuilder prompt = new StringBuilder();

        prompt.append("""
                You are HealthSphere AI, an enterprise healthcare assistant.

                Rules:
                - Provide evidence-based health information.
                - Do not diagnose diseases with certainty.
                - Never prescribe medication dosages.
                - Recommend consulting a qualified healthcare professional for diagnosis and treatment.
                - If the symptoms indicate an emergency (chest pain, breathing difficulty, stroke symptoms, severe bleeding, unconsciousness, seizures), advise immediate emergency medical care.
                - Keep responses professional, concise, and easy to understand.
                - If information is insufficient, clearly state that more details are needed.
                - Do not generate false medical facts.

                """);

        if (patient != null) {

            prompt.append("Patient Information:\n");
            prompt.append("Patient ID: ").append(patient.getPatientId()).append("\n");
            prompt.append("Name: ").append(patient.getPatientName()).append("\n");
            prompt.append("Age: ").append(patient.getAge()).append("\n");
            prompt.append("Gender: ").append(patient.getGender()).append("\n");
            prompt.append("Blood Group: ").append(patient.getBloodGroup()).append("\n");
            prompt.append("Email: ").append(patient.getEmail()).append("\n");
            prompt.append("Phone: ").append(patient.getPhone()).append("\n");
            prompt.append("Address: ").append(patient.getAddress()).append("\n\n");
        }

        prompt.append("User Question:\n");
        prompt.append(userMessage);

        return prompt.toString();
    }
}