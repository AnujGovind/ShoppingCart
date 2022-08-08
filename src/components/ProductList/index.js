import React from 'react';
import Product from '../../components/Product';
import './index.css';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/products';

const ProductList = () => {

  const products = useSelector(state => getProducts(state));

  return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

export default ProductList;
