import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ onAddToCart }) {
  const [products] = useState([
    {
      id: 1,
      name: 'Nike Dunk Low',
      colors: 1,
      price: '$120',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=250&h=250&fit=crop',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Air Jordan 1 Low',
      colors: 1,
      price: '$150',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=250&h=250&fit=crop',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Nike Air Max Plus 3',
      colors: 1,
      price: '$180',
      image: 'https://images.unsplash.com/photo-1556821552-5f63b1c2c723?w=250&h=250&fit=crop',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Nike SB Dunk',
      colors: 2,
      price: '$140',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=250&h=250&fit=crop',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Adidas Ultraboost',
      colors: 1,
      price: '$160',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=250&h=250&fit=crop',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Puma RS-X',
      colors: 2,
      price: '$110',
      image: 'https://images.unsplash.com/photo-1595777712802-5d1d27be1dca?w=250&h=250&fit=crop',
      rating: 4.3
    },
    {
      id: 7,
      name: 'New Balance 990v6',
      colors: 1,
      price: '$190',
      image: 'https://images.unsplash.com/photo-1608231387042-ec2604a01fca?w=250&h=250&fit=crop',
      rating: 4.9
    },
    {
      id: 8,
      name: 'Converse Chuck Taylor',
      colors: 3,
      price: '$65',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=250&h=250&fit=crop',
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
