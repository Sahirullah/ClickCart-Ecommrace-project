import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        
        <div className="product-badges">
          <button 
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
            title="Add to favorites"
            aria-label="Add to favorites"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          
          <button 
            className="compare-btn"
            title="Compare prices"
            aria-label="Compare prices"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
              <line x1="12" y1="12" x2="20" y2="7.5"></line>
              <line x1="12" y1="12" x2="12" y2="21"></line>
              <line x1="12" y1="12" x2="4" y2="7.5"></line>
            </svg>
          </button>
        </div>
        
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
          
          <div className="product-actions">
            <button 
              className="add-to-cart-btn"
              onClick={onAddToCart}
              title="Add to cart"
              aria-label="Add to cart"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            
            <button 
              className="order-now-btn"
              title="Order now"
              aria-label="Order now"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
