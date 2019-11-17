import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cart";
import CartItem from '../../models/cartItem'
import Product from "../../models/product";

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    // console.log('Cart here ', action.product)
    switch (action.type) {
        case ADD_TO_CART:
            // State addedProduct
            const addedProduct = action.product;
            // Map addedProduct to cart
            const productId = addedProduct.id;
            const productName = addedProduct.title;
            const productPrice = addedProduct.price;
            const productQuantity = addedProduct.quantity;
            const productTotal = addedProduct.total;
            const categoryTitle = addedProduct.categoryTitle;

            let orderItem;

            if (state.items[addedProduct.id]) {
                // already have the item in the cart
                orderItem = new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle);
            } else {
                // console.log(new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle))
                orderItem = new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle);
            }
            return {
                ...state,
                items: {...state.items, [productId]: orderItem},
                totalAmount: state.totalAmount + productTotal
            };
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                // need to reduce it, not erase it
                const updatedCartItem = new CartItem(
                    selectedCartItem.id,
                    selectedCartItem.title,
                    selectedCartItem.price,
                    selectedCartItem.quantity - 1,
                    selectedCartItem.total - selectedCartItem.price,
                    selectedCartItem.categoryTitle
                );
                updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.price
            };
    }
    return state;
};
