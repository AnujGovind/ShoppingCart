import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, isInCart } from '../../store/cart';
import { useNavigate } from "react-router-dom";import { Link } from "react-router-dom";

const Product = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAlreadyInCart = useSelector(state => isInCart(state, props));
    const { id, name, price, currency, image, showViewDetail=true } = props;

    const handleClick = () => {
        if (isAlreadyInCart) {
            dispatch(removeFromCart(id));
        } else {
            dispatch(addToCart(id));
        }
    }

    const viewHandleClick = () => {
        navigate(`/viewDetails/${id}`)
    }

    return (
        
        <div className="row">
          <div className="col-md-12 mr-1">
            <div className="product thumbnail">
                <img src={image} alt="product" onClick={()=>viewHandleClick()}/>
                <div className="caption">
                    <div><Link to={`/viewDetails${id}`}>{name}</Link></div>
                    <div className="product__price">{price} {currency}</div>
                    <div>
                        {showViewDetail && <button className={'btn btn-primary mr-1'} onClick={()=>viewHandleClick()}>
                            {'View Details'}
                        </button>}
                        <button className={isAlreadyInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={handleClick}>
                            {isAlreadyInCart ? 'Remove' : 'Add to cart'  }
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Product;