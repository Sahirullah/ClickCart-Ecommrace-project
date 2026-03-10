import './BottomPromo.css'

export default function BottomPromo() {
  return (
    <section className="bottom-promo">
      <div className="container">
        <div className="bottom-promo-content">
          <div className="bottom-promo-image">
            <div className="yellow-blob"></div>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Person" className="bottom-promo-img" />
          </div>
          <div className="bottom-promo-text">
            <h2>Step into Style with New Arrivals!</h2>
            <p>Discover the latest collection of premium footwear. From classic designs to cutting-edge styles, find your perfect pair today.</p>
            <button className="btn btn-bottom">Explore Collection</button>
          </div>
        </div>
      </div>
    </section>
  )
}
