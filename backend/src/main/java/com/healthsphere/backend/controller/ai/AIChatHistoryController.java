package com.healthsphere.backend.controller.ai;

import com.healthsphere.backend.dto.ai.AIChatHistoryResponse;
import com.healthsphere.backend.service.ai.AIChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai/history")
@RequiredArgsConstructor
public class AIChatHistoryController {

    private final AIChatService aiChatService;

    @GetMapping
    public ResponseEntity<List<AIChatHistoryResponse>> getAllChats() {
        return ResponseEntity.ok(aiChatService.getAllChats());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChat(@PathVariable Long id) {

        aiChatService.deleteChat(id);

        return ResponseEntity.ok("Chat deleted successfully.");
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllChats() {

        aiChatService.deleteAllChats();

        return ResponseEntity.ok("All chat history deleted successfully.");
    }
}