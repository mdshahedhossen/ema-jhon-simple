import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/UseCard';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css'
const Orders = () => {
    const [products,setProducts]=useProducts()
    const[cart,setCart]=useCart(products)
    
    const handleRemoveProduct= product=>{
        const rest=cart.filter(pd=>pd.id !==product.id)
        setCart(rest);
        removeFromDb(product.id)
        
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product=><ReviewItems
                    key={product.id}
                    product={product}
                    handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItems>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/shipmet" style={{textDecoration:"none"}}>
                        <button className='review-btn'>Proceed Checkout</button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Orders;