import React from 'react';
import Product from '../../components/Product';
import './index.css';
import { useSelector } from 'react-redux';
import { getProduct } from '../../store/products';
import { useParams } from 'react-router-dom';
import './index.css';

const ViewDetails = () => { 
    const params = useParams();
    const product = useSelector(state => getProduct(state,params.id));
    return (
        <div className='viewDetails'>
            <h3>Product Detail</h3>
                <Product {...product} showViewDetail={false}/>
        </div>
    );
}

export default ViewDetails;
