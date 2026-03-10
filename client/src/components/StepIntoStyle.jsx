import './StepIntoStyle.css'
import { useState } from 'react'

export default function StepIntoStyle() {
  const [imageErrors, setImageErrors] = useState({})

  const products = [
    { id: 1, name: 'Jordan Air Max', price: 'pkr:150', originalPrice: 'pkr:300', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop' },
    { id: 2, name: 'Nike SB Dunk', price: 'pkr:140', originalPrice: 'pkr:280', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=200&h=200&fit=crop' },
    { id: 3, name: 'Adidas Ultraboost', price: 'pkr:180', originalPrice: 'pkr:350', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=200&fit=crop' },
    { id: 4, name: 'Puma RS-X', price: 'pkr:120', originalPrice: 'pkr:250', image: 'https://images.unsplash.com/photo-1556821552-5f63b1c2c723?w=200&h=200&fit=crop' },
    { id: 5, name: 'New Balance 990', price: 'pkr:190', originalPrice: 'pkr:400', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop' },
    { id: 6, name: 'Converse Chuck', price: 'pkr:65', originalPrice: 'pkr:150', image: 'https://images.unsplash.com/photo-1595777712802-5d1d27be1dca?w=200&h=200&fit=crop' },
    { id: 7, name: 'Vans Old Skool', price: 'pkr:75', originalPrice: 'pkr:180', image: 'https://images.unsplash.com/photo-1608231387042-ec2604a01fca?w=200&h=200&fit=crop' },
    { id: 8, name: 'Reebok Classic', price: 'pkr:85', originalPrice: 'pkr:200', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop' },
    { id: 9, name: 'Asics Gel-Lyte', price: 'pkr:130', originalPrice: 'pkr:280', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  ]

  const handleImageError = (productId) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }))
  }

  const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%23999" text-anchor="middle" dy=".3em"%3EProduct Image%3C/text%3E%3C/svg%3E'

  return (
    <section className="step-into-style">
      <div className="container">
        <h2>Step into Style with New Arrivals!</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="style-product-card">
              <div className="style-product-image">
                <img 
                  src={imageErrors[product.id] ? placeholderImage : product.image} 
                  alt={product.name}
                  onError={() => handleImageError(product.id)}
                />
              </div>
              <h4>{product.name}</h4>
              <div className="style-price-section">
                <p className="style-price">{product.price}</p>
                <p className="style-original-price">{product.originalPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
