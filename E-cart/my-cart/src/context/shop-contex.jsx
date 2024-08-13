import React, { createContext ,useState} from 'react'
import { PRODUCTS } from '../products';
export const ShopContext= createContext(null);

const getDefaultCart = ()=>{
    let cart ={};
    for(let i=1;i< PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
 const [cartItems, setcartItems] = useState(getDefaultCart());   

 const addToCart =(itemId) =>{
   setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
 }
 const removeFromCart =(itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  };

  const updateCartItemCount =(newAmount,itemId)=>{
    setcartItems((prev)=> ({...prev, [itemId]: newAmount}))
  }
   const  contextValue ={cartItems,addToCart,removeFromCart,updateCartItemCount}

  return (
    <ShopContext.Provider value={contextValue}
    >{props.children}</ShopContext.Provider>
  )
}
