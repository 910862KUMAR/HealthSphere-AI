import { useState } from "react";
import {
  SendHorizonal,
  Paperclip,
  Mic,
  Sparkles
} from "lucide-react";

function AIInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="border-t bg-white p-4">

      <div className="flex items-end gap-3">

        {/* Attachment */}
        <button
          className="w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 transition flex items-center justify-center"
          title="Attach File"
        >
          <Paperclip size={20} />
        </button>

        {/* Input */}
        <div className="flex-1 relative">

          <textarea
            rows={1}
            value={message}
            placeholder="Ask HealthSphere AI anything..."
            className="w-full resize-none rounded-2xl border border-gray-300 bg-gray-50 px-5 py-3 pr-24 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />

          <div className="absolute right-3 bottom-3 flex gap-2">

            <button
              className="text-gray-500 hover:text-blue-600 transition"
              title="Voice Input"
            >
              <Mic size={18} />
            </button>

            <button
              className="text-gray-500 hover:text-purple-600 transition"
              title="AI Prompt"
            >
              <Sparkles size={18} />
            </button>

          </div>

        </div>

        {/* Send */}
        <button
          onClick={handleSend}
          className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition flex items-center justify-center"
          title="Send"
        >
          <SendHorizonal size={20} />
        </button>

      </div>

      <p className="text-xs text-gray-400 mt-2 text-center">
        AI responses may be inaccurate. Verify important medical information before use.
      </p>

    </div>
  );
}

export default AIInput;