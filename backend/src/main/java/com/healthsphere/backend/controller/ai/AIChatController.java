package com.healthsphere.backend.controller.ai;

import com.healthsphere.backend.dto.ai.ChatRequest;
import com.healthsphere.backend.dto.ai.ChatResponse;
import com.healthsphere.backend.service.ai.AIChatService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AIChatController {

    private final AIChatService aiChatService;

    @PostMapping("/chat")
    public ResponseEntity<ChatResponse> chat(
            @Valid @RequestBody ChatRequest request) {

        return ResponseEntity.ok(aiChatService.chat(request));
    }
}