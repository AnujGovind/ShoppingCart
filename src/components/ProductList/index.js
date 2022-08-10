import React from 'react';
import Product from '../../components/Product';
import './index.css';
import { useSelector } from 'react-redux';
import { getProductsList } from '../../store/products';

const ProductList = () => {

  const products = useSelector(state => getProductsList(state));

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
