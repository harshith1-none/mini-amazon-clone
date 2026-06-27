//day 5 step 6

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import products from './data/products';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import ProductDetail from './pages/ProductDetail';
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
    <Routes>
      <Route path="/" element={
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
                id={product.id}
                onAddToCart={handleAddToCart}
              />
            ))}
            {filtered.length === 0 && (
              <p className="no-results">No products found for "{query}"</p>
            )}
          </div>
        </div>
      } />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;

//day 5 step 6