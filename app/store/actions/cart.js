export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREMENT_FROM_CART = 'DECREMENT_FROM_CART';
export const INCREMENT_FROM_CART = 'INCREMENT_FROM_CART';

export const addToCart = product => {
    return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = productId => {
    return { type: REMOVE_FROM_CART, pid: productId };
};


// additional
export const decrementFromCart = productId => {
    return { type: DECREMENT_FROM_CART, pid: productId };
};

export const incrementFromCart = productId => {
    return { type: INCREMENT_FROM_CART, pid: productId };
};
