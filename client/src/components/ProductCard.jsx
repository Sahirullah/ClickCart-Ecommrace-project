import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {isHovered && (
          <div className="product-overlay">
            <button className="quick-view-btn">Quick View</button>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-colors">{product.colors} Colour{product.colors > 1 ? 's' : ''}</p>
        
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <button 
            className="add-to-cart-btn"
            onClick={onAddToCart}
            title="Add to cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
