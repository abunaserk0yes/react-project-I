import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product)
    const{name,img,seller,price,stock,key}=props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div className='product-name'>
                <h4><Link to={'/product/'+key}>{name}</Link></h4>
                <p>by:{seller}</p>
                <h5>${price}</h5>
                <p>only {stock} left in stock - order soon</p>
                {props.showAddToCart && <button onClick={()=>props.handelAddProduct(props.product)} className='cart-btn'><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>}
            </div>
        </div>
    );
};

export default Product;