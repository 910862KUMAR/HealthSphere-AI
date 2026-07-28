import { useState } from "react";
import aiService from "../../services/aiService";

import AIMessage from "./AIMessage";
import AIInput from "./AIInput";
import AITyping from "./AITyping";

function AIAssistantPanel() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Welcome back Admin! How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleSend = async (message) => {
    if (!message.trim()) return;

    // Add user message
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
        message: message,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Unable to connect to AI server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-lg border flex flex-col overflow-hidden">

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-4">
        <h2 className="text-xl font-bold">🤖 HealthSphere AI</h2>
        <p className="text-sm opacity-90">Online</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <AIMessage
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && <AITyping />}
      </div>

      <AIInput onSend={handleSend} />
    </div>
  );
}

export default AIAssistantPanel;