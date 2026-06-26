// day 4/step 2

function ProductCard({ name, price, rating, category, image, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <span className="category">{category}</span>
        <h3>{name}</h3>
        <p className="price">₹{price.toLocaleString('en-IN')}</p>
        <p className="rating">⭐ {rating} / 5</p>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

// day 4/step 2