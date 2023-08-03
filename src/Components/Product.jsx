// Product.js
import React, { useState } from 'react';
import '../Styles/Product.css';

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
      <div className="product-actions">
        <div className="quantity-control">
          <button className="quantity-button" onClick={handleDecrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-button" onClick={handleIncrement}>+</button>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
