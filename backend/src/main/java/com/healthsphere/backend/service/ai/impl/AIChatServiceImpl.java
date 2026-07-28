package com.healthsphere.backend.service.ai.impl;

import com.healthsphere.backend.dto.ai.AIChatHistoryResponse;
import com.healthsphere.backend.dto.ai.ChatRequest;
import com.healthsphere.backend.dto.ai.ChatResponse;
import com.healthsphere.backend.entity.AIChatHistory;
import com.healthsphere.backend.repository.AIChatHistoryRepository;
import com.healthsphere.backend.service.ai.AIChatService;
import com.healthsphere.backend.util.ai.PromptBuilder;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AIChatServiceImpl implements AIChatService {

    private final ChatClient chatClient;
    private final AIChatHistoryRepository chatHistoryRepository;

    public AIChatServiceImpl(ChatClient.Builder chatClientBuilder,
                             AIChatHistoryRepository chatHistoryRepository) {
        this.chatClient = chatClientBuilder.build();
        this.chatHistoryRepository = chatHistoryRepository;
    }

    @Override
    public ChatResponse chat(ChatRequest request) {

        List<AIChatHistory> previousChats =
                chatHistoryRepository.findTop5ByOrderByCreatedAtDesc();

        StringBuilder memory = new StringBuilder();

        for (AIChatHistory chat : previousChats) {
            memory.append("User: ")
                    .append(chat.getUserMessage())
                    .append("\n");

            memory.append("Assistant: ")
                    .append(chat.getAiResponse())
                    .append("\n\n");
        }

        String prompt = PromptBuilder.buildHealthPrompt(
                request.getMessage(),
                null
        );

        prompt = """
                Previous Conversation:

                """ + memory + """

                Current Conversation:

                """ + prompt;

        String aiResponse = chatClient.prompt()
                .user(prompt)
                .call()
                .content();

        AIChatHistory history = AIChatHistory.builder()
                .userMessage(request.getMessage())
                .aiResponse(aiResponse)
                .createdAt(LocalDateTime.now())
                .build();

        chatHistoryRepository.save(history);

        return ChatResponse.builder()
                .response(aiResponse)
                .build();
    }

    @Override
    public List<AIChatHistoryResponse> getAllChats() {

        return chatHistoryRepository.findAll()
                .stream()
                .map(chat -> AIChatHistoryResponse.builder()
                        .id(chat.getId())
                        .userMessage(chat.getUserMessage())
                        .aiResponse(chat.getAiResponse())
                        .createdAt(chat.getCreatedAt())
                        .build())
                .toList();
    }

    @Override
    public void deleteChat(Long id) {
        chatHistoryRepository.deleteById(id);
    }

    @Override
    public void deleteAllChats() {
        chatHistoryRepository.deleteAll();
    }
}