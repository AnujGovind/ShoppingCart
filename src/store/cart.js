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
    return {
        ...state,
        items: [ ...state.items, 
            {productId: payload.productId, quantity :parseInt(payload.quantity)}
        ]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(item => item.productId !== payload.productId)
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
    let result = state.cart.items.filter(item => {
        return item.productId === props.id
    });
 
    return result.length;
}

export function getItems(state) {
    return state.cart.items.map(item => {
            let result = getProduct(state, item.productId);
            return {...result, quantity:item.quantity};
        });
}

export function getCurrency(state) {
    return state.cart.currency;
}

export function getTotal(state) {
    return state.cart.items.reduce((acc, product) => {
        const item = getProduct(state, product.productId);
        return acc + (item.price * product.quantity);
    }, 0);
}
