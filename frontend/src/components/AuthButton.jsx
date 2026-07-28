const AuthButton = ({
  text,
  loading = false,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="
        w-full
        py-3
        rounded-xl
        bg-blue-700
        hover:bg-blue-800
        text-white
        font-semibold
        transition-all
        duration-300
        disabled:opacity-60
      "
    >
      {loading ? "Please Wait..." : text}
    </button>
  );
};

export default AuthButton;