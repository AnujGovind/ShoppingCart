import React, { Component, useState } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, isInCart } from '../../store/cart';

const Product = (props) => {

    const dispatch = useDispatch();
    const isAlreadyInCart = useSelector(state => isInCart(state, props));
    const { id, name, price, currency, image } = props;
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        if (isAlreadyInCart) {
            dispatch(removeFromCart(id));
        } else {
            dispatch(addToCart(id, quantity));
        }
    }

    return (
        
        <div className="row">
          <div className="col-md-8">
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__button-wrap">
                    {!isAlreadyInCart &&
                   <input type="number" id="tentacles" name="tentacles"
                       min= "1" max="10" defaultValue={1} onClick={(e) => setQuantity(e.target.value)} />
                   }

                        <button
                            className={isAlreadyInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={handleClick}
                        >
                            {isAlreadyInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Product;