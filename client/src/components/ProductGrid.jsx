import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ onAddToCart }) {
  const [products] = useState([
    {
      id: 1,
      name: 'Nike Dunk Low',
      colors: 1,
      price: '$120',
      image: 'https://via.placeholder.com/250x250?text=Nike+Dunk+Low',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Air Jordan 1 Low',
      colors: 1,
      price: '$150',
      image: 'https://via.placeholder.com/250x250?text=Air+Jordan+1',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Nike Air Max Plus 3',
      colors: 1,
      price: '$180',
      image: 'https://via.placeholder.com/250x250?text=Air+Max+Plus+3',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Nike SB Dunk',
      colors: 2,
      price: '$140',
      image: 'https://via.placeholder.com/250x250?text=Nike+SB+Dunk',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Adidas Ultraboost',
      colors: 1,
      price: '$160',
      image: 'https://via.placeholder.com/250x250?text=Adidas+Ultraboost',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Puma RS-X',
      colors: 2,
      price: '$110',
      image: 'https://via.placeholder.com/250x250?text=Puma+RS-X',
      rating: 4.3
    },
    {
      id: 7,
      name: 'New Balance 990v6',
      colors: 1,
      price: '$190',
      image: 'https://via.placeholder.com/250x250?text=New+Balance+990v6',
      rating: 4.9
    },
    {
      id: 8,
      name: 'Converse Chuck Taylor',
      colors: 3,
      price: '$65',
      image: 'https://via.placeholder.com/250x250?text=Converse+Chuck',
      rating: 4.2
    }
  ]);

  return (
    <section className="products-section">
      <div className="products-header">
        <h3>Popular Products</h3>
        <div className="carousel-controls">
          <button className="carousel-btn prev">←</button>
          <button className="carousel-btn next">→</button>
        </div>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
