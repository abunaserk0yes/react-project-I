import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Productdetails = () => {
    const {productKey}=useParams()
    const product=fakeData.find(pd=>pd.key===productKey)
    // console.log(product)
    return (
        <div>
            <h2>{productKey} Details comming soon.................!</h2>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default Productdetails;