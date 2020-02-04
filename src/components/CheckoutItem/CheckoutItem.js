import React from 'react';
import {connect} from 'react-redux';

import {clearItemFromCart,removeItem,addItem} from '../../redux/cart/cart.actions';

import './CheckoutItem.scss';

const CheckoutItem = ({cartItem,clearItem,removeItem,addItem}) => {
    const {id,name,imageUrl,price,quantity}=cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(id)}> &#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearItem(id)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispach => ({
    clearItem: (itemId) => dispach(clearItemFromCart(itemId)),
    removeItem: (itemId) => dispach(removeItem(itemId)),
    addItem: (item) => dispach(addItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);