package com.healthsphere.backend.service.ai;

import com.healthsphere.backend.dto.ai.AIChatHistoryResponse;
import com.healthsphere.backend.dto.ai.ChatRequest;
import com.healthsphere.backend.dto.ai.ChatResponse;

import java.util.List;

public interface AIChatService {

    ChatResponse chat(ChatRequest request);

    List<AIChatHistoryResponse> getAllChats();

    void deleteChat(Long id);

    void deleteAllChats();
}