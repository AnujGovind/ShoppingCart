import React from 'react';

const CartItem = ({ name, price, currency, onClick, isInCart}) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{name}</span>
                {!isInCart &&
                   <input type="number" id="tentacles" name="tentacles" 
                       min= "1" max="10"/>
                   }
            </div>
            <div className="cart-item__price">{price} {currency}</div>
        </div>
    );
}

export default CartItem;
