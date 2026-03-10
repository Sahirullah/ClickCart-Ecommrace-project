import './FindPerfectShoes.css'

export default function FindPerfectShoes() {
  return (
    <section className="find-perfect-shoes">
      <div className="container">
        <div className="find-content">
          <div className="find-text">
            <h2>Find the Perfect Shoes, Explore Endless Possibilities</h2>
            <p>Discover our curated collection of premium footwear. From classic styles to the latest trends, find exactly what you're looking for.</p>
            <div className="find-buttons">
              <button className="btn btn-primary">Shop Now</button>
              <button className="btn btn-secondary">View All</button>
            </div>
          </div>
          <div className="find-image">
            <div className="orange-blob"></div>
            <img src="https://via.placeholder.com/300x300?text=Person+with+Shoes" alt="Person" className="person-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
