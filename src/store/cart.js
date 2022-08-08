import { getProduct } from '../store/products';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';

// reducer
const initialState = {
    items: [], // array of product ids
    currency: 'Rupees'
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    debugger;
    return {
        ...state,
        items: [ ...state.items, payload.productId, payload.quantity ]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId)
    };
}

// action creators
export function addToCart(productId, quantity) {
    return {
        type: CART_ADD,
        payload: {
            productId,
            quantity
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state) {
    return state.cart.items.map(id => getProduct(state, id));
}

export function getCurrency(state) {
    return state.cart.currency;
}

export function getTotal(state) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, id);
        debugger;
        return acc + (item.price * item.quantity);
    }, 0);
}
