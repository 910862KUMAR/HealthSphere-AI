import { useEffect, useRef, useState } from "react";
import aiService from "../../services/aiService";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import LoadingSpinner from "./LoadingSpinner";

function AIChatBox() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const loadHistory = async () => {
    try {
      const history = await aiService.getChatHistory();

      const formatted = [];

      history.forEach((chat) => {
        formatted.push({
          sender: "user",
          text: chat.userMessage,
        });

        formatted.push({
          sender: "ai",
          text: chat.aiResponse,
        });
      });

      setMessages(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSend = async (message) => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setLoading(true);

    try {
      const response = await aiService.sendMessage({
        patientId: 1,
        message,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.response,
        },
      ]);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ AI Server Error",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await aiService.deleteAllChats();
      setMessages([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-lg flex flex-col">

      <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-xl">

        <h2 className="text-2xl font-bold">
          HealthSphere AI
        </h2>

        <button
          onClick={handleDeleteAll}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Chat
        </button>

      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-3">

        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && <LoadingSpinner />}

        <div ref={bottomRef}></div>

      </div>

      <ChatInput onSend={handleSend} />

    </div>
  );
}

export default AIChatBox;