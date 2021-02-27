import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const{name,img,seller,price,stock}=props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4>{name}</h4>
                <p>by:{seller}</p>
                <h5>${price}</h5>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handelAddProduct(props.product)} className='cart-btn'><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;