import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Cart.css';

const Cart = ({ cartItems, removeFromCart,}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <div className="cart-items">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price.toFixed(2)} x {item.quantity}
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <a href="#payment-section">
          <button className="proceed-button">Proceed to Payment</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;
