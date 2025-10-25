import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartItemsCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          UNQUIRGOLAS
        </NavLink>
        
        <div className="nav-menu">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/products"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Productos
          </NavLink>
          
          <NavLink 
            to="/cart"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Carrito ({getCartItemsCount()})
          </NavLink>
          
          <NavLink 
            to="/login"
            className={({ isActive }) => 
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;