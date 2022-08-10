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
                              <table class="table">
                                <thead class="thead-dark">
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                {items.map(item => (
                                   <CartItem key={item.id} {...item}
                                       onClick={() => dispatch(removeFromCart(item.id))} />
                                  ))
                                }    
                                </tbody>
                              </table>
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="cart__total">Grant Total: {total} {currency}</div>
        </div>
    );
}

export default Cart;