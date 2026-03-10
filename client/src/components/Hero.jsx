import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h2 className="hero-title">
            Express <span className="highlight">—</span> Yourself
            <br />
            Through <span className="highlight-word">Style.</span>
          </h2>
          <p className="hero-description">
            Discover our curated collection of premium footwear and apparel. 
            Express your unique style with trending pieces from top brands.
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-background">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=300&fit=crop" alt="Featured Shoe" className="shoe-img" />
          </div>
          <div className="hero-badge">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="white"/>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ff9500"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
