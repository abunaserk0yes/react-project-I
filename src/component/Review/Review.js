import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager'
import Reviewitem from '../Reviewitem/Reviewitem';

const Review = () => {
    const [ cart, setCart ] = useState([]);

    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys=Object.keys(savedCart)

        const cardProducts= productKeys.map(key => {
            const product =fakeData.find(pd=>pd.key===key)
            product.qunatity=savedCart[key]
            return(product)
        })
        setCart(cardProducts)
    },[])
    return (
        <div>
            <h1>Cart Items:{cart.length}</h1>
            {
                cart.map(pd=><Reviewitem product={pd} key={pd.key}></Reviewitem>)
            }
        </div>
    );
};

export default Review;