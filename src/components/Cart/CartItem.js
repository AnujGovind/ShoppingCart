import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart  } from '../../store/cart';


const CartItem = ({id, name, price, currency, onClick, quantity}) => {

    const dispatch = useDispatch();
    const setQuantity = (id,quantity) => {
      if (quantity === 0)
        dispatch(removeFromCart(id));
      else
        dispatch(addToCart(id, quantity));
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <input type="number" min= {1} max={10} defaultValue={1} 
                    onClick={(e) => setQuantity(id,parseInt(e.target.value))} />
            </td>
            <td>{price * quantity} {currency}</td>
            <td><button className="btn btn-danger btn-xs"  onClick={onClick}>X</button></td>
        </tr>
    );
}

export default CartItem;
