import {cartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = itemId => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: itemId
})

export const removeItem = itemId => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: itemId
})