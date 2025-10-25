import React from 'react';
import ProductList from '../components/Product/ProductList';
import { useApi } from '../hooks/useApi';

const Products = () => {
  // URL de API de ejemplo - reemplazar con tu API real
  const { data: products, loading, error } = useApi('https://fakestoreapi.com/products');

  return (
    <div className="products-page">
      <div className="container">
        <ProductList 
          products={products} 
          loading={loading} 
          error={error} 
        />
      </div>
    </div>
  );
};

export default Products;