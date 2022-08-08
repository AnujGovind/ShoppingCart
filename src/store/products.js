// reducer
export default function products(state = []) {
    return state; // nothing to do here, but we need products node in redux store
}

// selectors
export function getProducts(state) {
    return state.products;
}

export function getProduct(state, productId) {
    return state.products.find(item => item.id === productId);
}
