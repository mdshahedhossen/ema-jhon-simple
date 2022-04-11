import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product,handleToCart}) => {
    // console.log(props)
    // const {handleToCart}=props
    // const {product,handleToCart}=props
    const {img,name,price,seller,ratings}=product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='procduct-name'>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button onClick={()=>handleToCart(product)} className='btn-cart'> 
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
        
    );
};

export default Product;