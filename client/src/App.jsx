import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PopularProducts from './components/PopularProducts'
import FindPerfect from './components/FindPerfect'
import PromoSection from './components/PromoSection'
import StepIntoStyle from './components/StepIntoStyle'
import LifestyleSection from './components/LifestyleSection'
import Footer from './components/Footer'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  // Check for admin access (you can add proper authentication later)
  const handleAdminAccess = () => {
    const password = prompt('Enter admin password:')
    if (password === 'admin123') {
      setIsAdmin(true)
    } else {
      alert('Invalid password')
    }
  }

  if (isAdmin) {
    return (
      <div className="app">
        <AdminDashboard />
        <button 
          className="exit-admin-btn"
          onClick={() => setIsAdmin(false)}
        >
          ← Back to Store
        </button>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <button 
        className="admin-access-btn"
        onClick={handleAdminAccess}
      >
        Admin
      </button>
      <Hero />
      <PopularProducts />
      <FindPerfect />
      <PromoSection />
      <StepIntoStyle />
      <LifestyleSection />
      <Footer />
    </div>
  )
}

export default App
