import {
    ADD_TO_CART,
    DECREMENT_FROM_CART,
    REMOVE_FROM_CART,
    INCREMENT_FROM_CART
} from "../actions/cart";
import { ADD_ORDER } from '../actions/orders';
import CartItem from '../../models/cartItem'
import Product from "../../models/product";
import {DELETE_PRODUCT} from "../actions/products";

const initialState = {
    items: {},
    totalAmount: 0,
    Wash: 0,
    Iron: 0,
    DryClean: 0,
    PremiumWash: 0
};

export default (state = initialState, action) => {
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

            let addedWash = 0;
            let addedDryClean = 0;
            let addedIron = 0;
            let addedPremiumWash = 0;

            if (state.items[addedProduct.id]) {
                // already have the item in the cart
                orderItem = new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle);
            } else {
                // console.log(new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle))
                orderItem = new CartItem(productId, productName, productPrice, productQuantity, productTotal, categoryTitle);
                // switch (categoryTitle) {
                //     case "Wash":
                //         addedWash = state.washTotal + productQuantity
                //         break;
                //     case "DryClean":
                //         addedDryClean = state.DryCleanTotal + productQuantity
                //         break;
                //     case "Iron":
                //         return addedIron = state.ironTotal + productQuantity
                //         break;
                //     case "PremiumWash":
                //         return addedPremiumWash = state.PremiumTotal + productQuantity
                //         break;
                // }
            }
            return {
                ...state,
                items: {...state.items, [productId]: orderItem},
                totalAmount: state.totalAmount + productTotal,
                Wash: productQuantity,
                iron: productQuantity,
                DryClean: productQuantity,
                Premium: productQuantity,
            };

        case REMOVE_FROM_CART:
            const removeCartItem = state.items[action.pid];
            let removeCartItems;

            removeCartItems = {...state.items};
            delete removeCartItems[action.pid];

            return {
                ...state,
                items: removeCartItems,
                totalAmount: state.totalAmount - removeCartItem.total
            };

            break;

        case DECREMENT_FROM_CART:
            const decrementCartItem = state.items[action.pid];
            // const currentQty = decrementCartItem.quantity;
            let updatedCartItems;
            if (decrementCartItem.quantity > 1) {
                // need to reduce it, not erase it
                const updatedCartItem = new CartItem(
                    decrementCartItem.id,
                    decrementCartItem.title,
                    decrementCartItem.price,
                    decrementCartItem.quantity - 1,
                    decrementCartItem.total - decrementCartItem.price,
                    decrementCartItem.categoryTitle
                );
                updatedCartItems = {...state.items, [action.pid]: updatedCartItem};
            } else {
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - decrementCartItem.price
            };
            break;

        case INCREMENT_FROM_CART:
            const incrementCartItem = state.items[action.pid];
            // const currentQty = decrementCartItem.quantity;
            let datedCartItems;
            if (incrementCartItem.quantity > 1) {
                // need to reduce it, not erase it
                const updatedCartItem = new CartItem(
                    incrementCartItem.id,
                    incrementCartItem.title,
                    incrementCartItem.price,
                    incrementCartItem.quantity + 1,
                    incrementCartItem.total + incrementCartItem.price,
                    incrementCartItem.categoryTitle
                );
                datedCartItems = {...state.items, [action.pid]: updatedCartItem};
            } else {
                datedCartItems = {...state.items};
                delete datedCartItems[action.pid];
            }
            return {
                ...state,
                items: datedCartItems,
                totalAmount: state.totalAmount + incrementCartItem.price
            };
            break;

        case ADD_ORDER:
            return initialState;
        case DELETE_PRODUCT:
            if (!state.items[action.pid]) {
                return state;
            }
            const updatedItems = { ...state.items };
            const itemTotal = state.items[action.pid].sum;
            delete updatedItems[action.pid];
            return {
                ...state,
                items: updatedItems,
                totalAmount: state.totalAmount - itemTotal
            };
    }
    return state;
};
