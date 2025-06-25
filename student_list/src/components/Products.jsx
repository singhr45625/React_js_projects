import React from 'react';
import '../assets/styles.css';

const Products = () => {
  const products = [
    { id: 1, name: 'Dumbbell Set', price: '$99.99', image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb' },
    { id: 2, name: 'Yoga Mat', price: '$29.99', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c' },
    { id: 3, name: 'Resistance Bands', price: '$19.99', image: 'https://www.gornation.com/cdn/shop/files/dips-medium-resistance-band_e4ffcdbd-be9d-4b6e-880c-d3b11276f9ef.jpg?v=1700743404&width=360' },
    { id: 4, name: 'Protein Powder', price: '$49.99', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358' },
    { id: 5, name: 'Jump Rope', price: '$14.99', image: 'https://images.unsplash.com/photo-1596813362035-3edcff0c2487' }
  ];

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;