//day 7 step 2

function SortBar({ sortOrder, setSortOrder }) {
  return (
    <div className="sort-bar">
      <span>Sort by price:</span>
      <button
        className={`sort-btn ${sortOrder === 'low-high' ? 'active' : ''}`}
        onClick={() => setSortOrder(sortOrder === 'low-high' ? 'default' : 'low-high')}
      >
        Low → High
      </button>
      <button
        className={`sort-btn ${sortOrder === 'high-low' ? 'active' : ''}`}
        onClick={() => setSortOrder(sortOrder === 'high-low' ? 'default' : 'high-low')}
      >
        High → Low
      </button>
    </div>
  );
}

export default SortBar;

//day 7 step 2