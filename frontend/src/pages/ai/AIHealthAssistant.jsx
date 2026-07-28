import { useState } from "react";
import { Bot } from "lucide-react";

export default function AIHealthAssistant() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello! I'm your AI Health Assistant. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100 p-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-6 rounded-3xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-xl p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
              <Bot size={32} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                AI Health Assistant
              </h1>

              <p className="text-slate-500">
                Intelligent Healthcare Assistant powered by AI
              </p>
            </div>

            <div className="ml-auto flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-medium text-green-700">
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="rounded-3xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-2xl">

          {/* Suggested Prompts */}
          <div className="flex flex-wrap gap-3 border-b p-5">
            <button className="rounded-full bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-200">
              🤒 I have fever
            </button>

            <button className="rounded-full bg-green-100 px-4 py-2 text-green-700 hover:bg-green-200">
              💊 Medicine Advice
            </button>

            <button className="rounded-full bg-orange-100 px-4 py-2 text-orange-700 hover:bg-orange-200">
              🥗 Diet Plan
            </button>

            <button className="rounded-full bg-purple-100 px-4 py-2 text-purple-700 hover:bg-purple-200">
              ❤️ Diabetes Care
            </button>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xl rounded-2xl px-5 py-3 shadow-lg ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex">
                <div className="rounded-2xl bg-white px-5 py-3 shadow-lg">
                  🤖 AI is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-5">
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask anything about your health..."
                className="flex-1 rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
              >
                Send
              </button>
            </div>

            <div className="mt-4 rounded-xl bg-yellow-50 p-4 text-sm text-yellow-800">
              ⚠️ AI provides informational guidance only and is not a substitute
              for professional medical advice.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}