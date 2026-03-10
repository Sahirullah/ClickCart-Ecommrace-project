import { useState } from 'react'
import './PopularProducts.css'

const products = [
  {
    id: 1,
    name: 'Nike Dunk Low',
    colors: 1,
    price: 'pkr:500',
    originalPrice: 'pkr:1200',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop'
  },
  {
    id: 2,
    name: 'Air Jordan 1 Low',
    colors: 1,
    price: 'pkr:600',
    originalPrice: 'pkr:1500',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop'
  },
  {
    id: 3,
    name: 'Nike Air Max Plus 3',
    colors: 1,
    price: 'pkr:700',
    originalPrice: 'pkr:1800',
    image: 'https://images.unsplash.com/photo-1556821552-5f63b1c2c723?w=200&h=200&fit=crop'
  },
  {
    id: 4,
    name: 'Nike SB Dunk',
    colors: 2,
    price: 'pkr:550',
    originalPrice: 'pkr:1400',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=200&h=200&fit=crop'
  }
]

export default function PopularProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState({})
  const [imageErrors, setImageErrors] = useState({})

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }))
  }

  const handleImageError = (productId) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }))
  }

  const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%23999" text-anchor="middle" dy=".3em"%3EProduct Image%3C/text%3E%3C/svg%3E'

  return (
    <section className="popular-products">
      <div className="container">
        <div className="section-header">
          <h2>Popular Product</h2>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={handlePrev} aria-label="Previous">←</button>
            <button className="carousel-btn" onClick={handleNext} aria-label="Next">→</button>
          </div>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={imageErrors[product.id] ? placeholderImage : product.image} 
                  alt={product.name} 
                  className="product-image"
                  onError={() => handleImageError(product.id)}
                />
                
                <div className="product-badges">
                  <button 
                    className={`favorite-btn ${favorites[product.id] ? 'active' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                    title="Add to favorites"
                    aria-label="Add to favorites"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={favorites[product.id] ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
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
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-colors">{product.colors} Colour{product.colors > 1 ? 's' : ''}</p>
                <div className="product-footer">
                  <div className="product-price-section">
                    <span className="product-price">{product.price}</span>
                    <span className="product-original-price">{product.originalPrice}</span>
                  </div>
                  <div className="product-actions">
                    <button className="add-to-cart-btn" aria-label="Add to cart">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                    </button>
                    <button className="order-now-btn">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
