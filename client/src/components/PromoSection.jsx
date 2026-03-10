export default function PromoSection() {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-content">
          <div className="promo-text">
            <h2>Elevate Your Game, Elevate Your Life with Nike Product!</h2>
            <p>Experience the perfect blend of style and performance. Our Nike collection features the latest innovations designed to elevate your everyday look.</p>
            <button className="btn-primary">Shop Nike</button>
          </div>
          <div className="promo-image">
            <img src="https://images.unsplash.com/photo-1556821552-5f63b1c2c723?w=400&h=400&fit=crop" alt="Nike Promo" />
          </div>
          <div className="promo-badge">
            <span>+</span>
          </div>
        </div>
      </div>
    </section>
  )
}
