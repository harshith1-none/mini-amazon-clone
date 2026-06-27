// day 5/step 7

import { useNavigate } from 'react-router-dom';

function ProductCard({ id, name, price, rating, category, image, onAddToCart }) {
  const navigate = useNavigate();

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
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

// day 5/step 7