function ChatMessage({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-xl shadow-md whitespace-pre-wrap break-words ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        <div className="text-xs font-semibold mb-1">
          {isUser ? "You" : "HealthSphere AI"}
        </div>

        <div>{text}</div>
      </div>
    </div>
  );
}

export default ChatMessage;