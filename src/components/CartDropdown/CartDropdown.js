import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './CartDropdown.scss';

const CartDropdown = ({cartItems,history,dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.length?
                    cartItems.map(
                        cartItem => <CartItem key={cartItem.id} item={cartItem} />
                    ):
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={
                ()=> {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));