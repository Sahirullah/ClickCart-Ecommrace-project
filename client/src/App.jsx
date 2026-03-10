import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PopularProducts from './components/PopularProducts'
import FindPerfect from './components/FindPerfect'
import PromoSection from './components/PromoSection'
import StepIntoStyle from './components/StepIntoStyle'
import LifestyleSection from './components/LifestyleSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
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
