import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useProducts();
    const[cart,setCart]=useState([])

    useEffect(()=>{
        const storedCart=getStoredCart();
        const saveCart=[]
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity=quantity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart)
            
        }
    },[products])

    const handleToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id}
                    product={product}
                    handleToCart={handleToCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders" style={{textDecoration:"none"}}>
                        <button className='review-btn'>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;