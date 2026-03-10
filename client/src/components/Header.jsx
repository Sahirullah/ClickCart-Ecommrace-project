import './Header.css'
import clickcartLogo from '../assets/clickcart.png'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src={clickcartLogo} alt="ClickCart Logo" className="logo-img" />
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">New & Featured</a>
          <a href="#" className="nav-link">Men</a>
          <a href="#" className="nav-link">Women</a>
          <a href="#" className="nav-link">Sale</a>
        </nav>

        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
          />
          <button className="search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="icon-btn cart-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
