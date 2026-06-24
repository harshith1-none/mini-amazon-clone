// day 2/step 2
function ProductCard({ name, price, rating, category, image }) {
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
      </div>
    </div>
  );
}

export default ProductCard;
// day 2/step 2