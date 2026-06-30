// day 8/step 2

import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onAddToCart, onRemoveFromCart }) {
  const navigate = useNavigate();
  const { id, name, price, rating, category, image } = product;

  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <div className="product-image-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <span className="category">{category}</span>
        <h3>{name}</h3>
        <p className="price">₹{price.toLocaleString('en-IN')}</p>
        <p className="rating">⭐ {rating} / 5</p>

        <div className="cart-actions">
          <button
            className="add-to-cart-btn"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
          >
            Add to Cart
          </button>
          <button
            className="remove-from-cart-btn"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFromCart();
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// day 8/step 2