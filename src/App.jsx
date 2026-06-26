//day 4 step 1

import { useState } from 'react';
import products from './data/products';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🛒 Mini Amazon</h1>
        <SearchBar query={query} setQuery={setQuery} />
        <p className="cart-count">🛒 Cart ({cartCount})</p>
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
            onAddToCart={handleAddToCart}
          />
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No products found for "{query}"</p>
        )}
      </div>
    </div>
  );
}

export default App;

//day 4 step 1