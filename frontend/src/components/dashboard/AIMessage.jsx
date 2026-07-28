import { Bot, User } from "lucide-react";

function AIMessage({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-start gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
          <Bot size={20} />
        </div>
      )}

      {/* Message */}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-md ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold">
            {isUser ? "You" : "HealthSphere AI"}
          </span>

          <span
            className={`text-[10px] ${
              isUser ? "text-blue-100" : "text-gray-400"
            }`}
          >
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <p className="whitespace-pre-wrap leading-7 text-sm">
          {text}
        </p>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
          <User size={20} />
        </div>
      )}
    </div>
  );
}

export default AIMessage;