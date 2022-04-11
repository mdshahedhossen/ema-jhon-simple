import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    // console.log(cart)
    let total=0
    let toalShipping=0
    let quantity=0;
    for(const product of cart){
        quantity=quantity+product.quantity;
        total=total+product.price * product.quantity;
        toalShipping=toalShipping+product.shipping
    }
    const tax=(total*(10/100)).toFixed(2)
    const grandTotal=parseFloat(total)+parseFloat(toalShipping)+parseFloat(tax) 
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: ${toalShipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            {/* <button className='clear-btn'>Clear Cart</button> */}
            {/* <button className='review-btn'>{props.children}</button> */}
            {props.children}
            
        </div>
    );
};

export default Cart;