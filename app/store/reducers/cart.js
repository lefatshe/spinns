import {ADD_TO_CART} from "../actions/cart";
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

            } else {
                // console.log(new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle))
                orderItem = new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle);
            }
            return {
                ...state,
                items: {...state.items, [productId]: orderItem},
                totalAmount: state.totalAmount + productTotal
            };

    }
    return state;
};
