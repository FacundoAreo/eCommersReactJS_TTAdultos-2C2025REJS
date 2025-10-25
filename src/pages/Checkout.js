import React from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();

  return (
    <div className="checkout">
      <h2>Finalizar Compra</h2>
      <div className="checkout-content">
        <div className="order-summary">
          <h3>Resumen del Pedido</h3>
          {cart.map(item => (
            <div key={item.id} className="checkout-item">
              <span>{item.name || item.title}</span>
              <span>${item.price} x {item.quantity}</span>
            </div>
          ))}
          <div className="checkout-total">
            <strong>Total: ${getCartTotal().toFixed(2)}</strong>
          </div>
        </div>
        
        <div className="checkout-form">
          <h3>Información de Envío</h3>
          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Dirección" required />
            <input type="text" placeholder="Ciudad" required />
            <button type="submit" className="pay-button">
              Realizar Pago
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;