// day 5 step 4
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="not-found">Product not found.</p>;
  }

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>
      <div className="detail-card">
        <img src={product.image} alt={product.name} />
        <div className="detail-info">
          <span className="category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="detail-rating">⭐ {product.rating} / 5</p>
          <p className="detail-description">{product.description}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
//day 5 step 4