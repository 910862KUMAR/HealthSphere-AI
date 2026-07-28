const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {

  return (
    <div className="w-full max-w-md">

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

    </div>
  );
};

export default SearchBar;