// reducer
export default function products(state = []) {
    return state; 
}

// selectors
export function getProductsList(state) {
    return state.products;
}

export function getProduct(state, productId) {
    return state.products.find(item => item.id === parseInt(productId));
}
