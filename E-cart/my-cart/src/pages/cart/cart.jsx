import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { Product } from '../shop/product';
import {ShopContext} from '../../context/shop-contex'
import { CartItem } from './cart-item';
import './cart.css'

export const Cart = () => {
    const {cartItems} = useContext(ShopContext);
  return <div className='cart'>

    <div>
        <h1>Your cart Items</h1>
    </div>
    <div className='cartItems'>
    {PRODUCTS.map((Product)=>{
       if(cartItems[Product.id] !==0){
        return <CartItem data={Product}/>
       }
    })}
     


    </div>
    <div className='btn-bill'>
    <p>Total Cost</p>
  <p>$7888 </p>
    <button className='btn-pay'>Pay</button>
  </div>
  </div>;
};
