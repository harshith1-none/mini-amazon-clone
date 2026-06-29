//day 6 step 1

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import products from './data/products';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import ProductDetail from './pages/ProductDetail';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

const categories = ['All', ...new Set(products.map((p) => p.category))];

function App() {
  const [query, setQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = products
    .filter((p) =>
      selectedCategory === 'All' ? true : p.category === selectedCategory
    )
    .filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
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
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="product-grid">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                category={product.category}
                image={product.image}
                onAddToCart={handleAddToCart}
              />
            ))}
            {filtered.length === 0 && (
              <p className="no-results">No products found.</p>
            )}
          </div>
        </div>
      } />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;

//day 6 step 1