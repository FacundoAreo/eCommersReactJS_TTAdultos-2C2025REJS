import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>¡Descubre nuestros productos!</p>
        <Link to="/products" className="continue-shopping">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Tu Carrito de Compras</h2>
        <button onClick={clearCart} className="clear-cart-btn">
          Vaciar Carrito
        </button>
      </div>
      
      <div className="cart-items">
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: ${getCartTotal().toFixed(2)}</h3>
        </div>
        <div className="cart-actions">
          <Link to="/products" className="continue-shopping">
            Seguir Comprando
          </Link>
          <Link to="/checkout" className="checkout-btn">
            Proceder al Pago
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;