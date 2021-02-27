import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
const first5=fakeData.slice(0,5)
const[products,setProducts]=useState(first5)
const[cart,setCart]=useState([])
    const handelAddProduct=(product)=>{
        console.log('Add Product',product)
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(pd=><Product product={pd} handelAddProduct={handelAddProduct}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;