import React from 'react';

const CartItem = ({ name, price, currency, onClick, isInCart, quantity}) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            {!isInCart && <div className="cart-item__price">{quantity}</div>}
            <div className="cart-item__price">{price * quantity} {currency}</div>
        </div>
    );
}

export default CartItem;
