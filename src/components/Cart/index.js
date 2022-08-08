import React from 'react';
import CartItem from './CartItem';
import './index.css';
import { useSelector,useDispatch } from 'react-redux';
import { getItems, getCurrency, getTotal, removeFromCart  } from '../../store/cart';

const Cart = () => {

    const items = useSelector(state => getItems(state));
    const currency = useSelector(state => getCurrency(state));
    const total = useSelector(state => getTotal(state));
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Cart Details</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item}
                                     onClick={() => dispatch(removeFromCart(item.id))}s />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;