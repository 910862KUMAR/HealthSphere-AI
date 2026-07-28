import { Bot } from "lucide-react";

function AITyping() {
  return (
    <div className="flex items-start gap-3">

      {/* AI Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
        <Bot size={20} />
      </div>

      {/* Typing Bubble */}
      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-md">

        <div className="text-xs font-semibold text-gray-700 mb-2">
          HealthSphere AI
        </div>

        <div className="flex items-center gap-2">

          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-bounce"></span>

          <span
            className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-bounce"
            style={{ animationDelay: "0.30s" }}
          ></span>

          <span className="ml-2 text-xs text-gray-500">
            Thinking...
          </span>

        </div>

      </div>

    </div>
  );
}

export default AITyping;