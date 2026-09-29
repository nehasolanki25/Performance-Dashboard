function SearchBar({ value, onChange }) {
  return (
    <div className="search-box">
      <span>🔍</span>

      <input
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;