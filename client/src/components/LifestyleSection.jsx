import './LifestyleSection.css'

export default function LifestyleSection() {
  return (
    <section className="lifestyle-section">
      <div className="container">
        <div className="lifestyle-content">
          <div className="lifestyle-image">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" alt="Lifestyle" />
          </div>
          <div className="lifestyle-text">
            <h2>Live Your Best Life with Our Collection</h2>
            <p>From street style to athletic performance, our curated selection brings together the best brands and latest trends. Express yourself through fashion.</p>
            <div className="lifestyle-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Premium Quality</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Fast Shipping</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Easy Returns</span>
              </div>
            </div>
            <button className="btn-primary">Discover More</button>
          </div>
          <div className="lifestyle-badge">
            <span>+</span>
          </div>
        </div>
      </div>
    </section>
  )
}
