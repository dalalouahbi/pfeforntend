import React from 'react';
import './product-details.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
