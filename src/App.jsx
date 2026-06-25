//day 3 step 1
import { useState } from 'react';
import products from './data/products';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>🛒 Mini Amazon</h1>
        <SearchBar query={query} setQuery={setQuery} />
        <p>{filtered.length} Products</p>
      </header>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            category={product.category}
            image={product.image}
          />
        ))}

          { /* day 3 step 4 */ }
        {filtered.length === 0 && (
           <p className="no-results">No products found for "{query}"</p>
        )}
          { /* day 3 step 4 */}

      </div>
    </div>
  );
}

export default App;

//day 3 step 1