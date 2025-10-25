import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useApi } from '../hooks/useApi';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { data: product, loading, error } = useApi(`https://fakestoreapi.com/products/${id}`);

  const handleAddToCart = () => {
    addToCart(product);
    // Feedback visual opcional
    alert('Producto agregado al carrito!');
  };

  if (loading) return <div className="loading">Cargando producto...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="error">Producto no encontrado</div>;

  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/products">← Volver a Productos</Link>
      </div>
      
      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="product-category">{product.category}</p>
          <p className="product-description">{product.description}</p>
          <div className="product-price">${product.price}</div>
          
          <button 
            className="add-to-cart-detail"
            onClick={handleAddToCart}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;