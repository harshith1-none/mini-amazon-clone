// day 2/step 3
import products from './data/products';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🛒 Mini Amazon</h1>
        <p>{products.length} Products</p>
      </header>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
// day 2/step 3