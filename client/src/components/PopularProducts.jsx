import { useState } from 'react'
import './PopularProducts.css'

const products = [
  {
    id: 1,
    name: 'Nike Dunk Low',
    colors: 1,
    price: '$120',
    image: 'https://via.placeholder.com/200x200?text=Nike+Dunk'
  },
  {
    id: 2,
    name: 'Air Jordan 1 Low',
    colors: 1,
    price: '$150',
    image: 'https://via.placeholder.com/200x200?text=Air+Jordan'
  },
  {
    id: 3,
    name: 'Nike Air Max Plus 3',
    colors: 1,
    price: '$180',
    image: 'https://via.placeholder.com/200x200?text=Air+Max'
  },
  {
    id: 4,
    name: 'Nike SB Dunk',
    colors: 2,
    price: '$140',
    image: 'https://via.placeholder.com/200x200?text=Nike+SB'
  }
]

export default function PopularProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

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
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-colors">{product.colors} Colour{product.colors > 1 ? 's' : ''}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="add-to-cart" aria-label="Add to cart">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
