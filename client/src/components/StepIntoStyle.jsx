import './StepIntoStyle.css'

export default function StepIntoStyle() {
  const products = [
    { id: 1, name: 'Jordan Air Max', price: '$150', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&h=200&fit=crop' },
    { id: 2, name: 'Nike SB Dunk', price: '$140', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=200&h=200&fit=crop' },
    { id: 3, name: 'Adidas Ultraboost', price: '$180', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=200&fit=crop' },
    { id: 4, name: 'Puma RS-X', price: '$120', image: 'https://images.unsplash.com/photo-1556821552-5f63b1c2c723?w=200&h=200&fit=crop' },
    { id: 5, name: 'New Balance 990', price: '$190', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop' },
    { id: 6, name: 'Converse Chuck', price: '$65', image: 'https://images.unsplash.com/photo-1595777712802-5d1d27be1dca?w=200&h=200&fit=crop' },
    { id: 7, name: 'Vans Old Skool', price: '$75', image: 'https://images.unsplash.com/photo-1608231387042-ec2604a01fca?w=200&h=200&fit=crop' },
    { id: 8, name: 'Reebok Classic', price: '$85', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop' },
    { id: 9, name: 'Asics Gel-Lyte', price: '$130', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  ]

  return (
    <section className="step-into-style">
      <div className="container">
        <h2>Step into Style with New Arrivals!</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="style-product-card">
              <div className="style-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h4>{product.name}</h4>
              <p className="style-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
