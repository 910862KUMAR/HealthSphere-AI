function LoadingSpinner() {
  return (
    <div className="flex justify-start">

      <div className="bg-gray-200 rounded-xl px-4 py-3 shadow-md">

        <div className="flex gap-2">

          <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>

          <div
            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>

          <div
            className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>

        </div>

      </div>

    </div>
  );
}

export default LoadingSpinner;