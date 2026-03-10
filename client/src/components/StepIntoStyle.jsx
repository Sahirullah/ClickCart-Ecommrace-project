import './StepIntoStyle.css'

export default function StepIntoStyle() {
  const products = [
    { id: 1, name: 'Jordan Air Max', price: '$150', image: 'https://via.placeholder.com/200x200?text=Jordan+Air' },
    { id: 2, name: 'Nike SB Dunk', price: '$140', image: 'https://via.placeholder.com/200x200?text=Nike+SB' },
    { id: 3, name: 'Adidas Ultraboost', price: '$180', image: 'https://via.placeholder.com/200x200?text=Adidas' },
    { id: 4, name: 'Puma RS-X', price: '$120', image: 'https://via.placeholder.com/200x200?text=Puma+RS' },
    { id: 5, name: 'New Balance 990', price: '$190', image: 'https://via.placeholder.com/200x200?text=New+Balance' },
    { id: 6, name: 'Converse Chuck', price: '$65', image: 'https://via.placeholder.com/200x200?text=Converse' },
    { id: 7, name: 'Vans Old Skool', price: '$75', image: 'https://via.placeholder.com/200x200?text=Vans' },
    { id: 8, name: 'Reebok Classic', price: '$85', image: 'https://via.placeholder.com/200x200?text=Reebok' },
    { id: 9, name: 'Asics Gel-Lyte', price: '$130', image: 'https://via.placeholder.com/200x200?text=Asics' },
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
