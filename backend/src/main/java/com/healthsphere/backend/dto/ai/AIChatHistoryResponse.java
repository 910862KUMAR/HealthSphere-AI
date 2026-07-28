package com.healthsphere.backend.dto.ai;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AIChatHistoryResponse {

    private Long id;

    private String userMessage;

    private String aiResponse;

    private LocalDateTime createdAt;
}