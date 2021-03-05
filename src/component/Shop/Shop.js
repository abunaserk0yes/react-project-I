import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import{addToDatabaseCart} from '../../utilities/databaseManager'

const Shop = () => {
const first5=fakeData.slice(0,5)
const[products,setProducts]=useState(first5)
const[cart,setCart]=useState([])
    const handelAddProduct=(product)=>{
        console.log('Add Product',product)
        const newCart=[...cart,product]
        setCart(newCart)
        const sameProduct=newCart.filter(pd => pd.key === product.key);
        const count=sameProduct.length
        addToDatabaseCart(product.key,count)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(pd=><Product product={pd} key={pd.key} handelAddProduct={handelAddProduct} showAddToCart={true}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;