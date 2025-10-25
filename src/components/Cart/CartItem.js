import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name || item.title} />
      </div>
      
      <div className="item-details">
        <h4>{item.name || item.title}</h4>
        <p className="item-price">${item.price}</p>
      </div>
      
      <div className="item-quantity">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      
      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button 
        className="remove-item"
        onClick={() => removeFromCart(item.id)}
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;