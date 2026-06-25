//day 3 step 2
function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <button onClick={() => setQuery('')}>✕</button>
      )}
    </div>
  );
}

export default SearchBar;
//day 3 step 2