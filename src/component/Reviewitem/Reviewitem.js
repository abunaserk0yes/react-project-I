import React from 'react';

const Reviewitem = (props) => {
    const{name,qunatity}=props.product;
    const reviewItemStyle ={
        borderBottom: '1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        paddingLeft:'210px',
    }
    return (
        <div style={reviewItemStyle} className='review-item'>
            <h4 className='product-name'>This is Items{name}</h4>
                <p>Quentity:{qunatity}</p>
            <button className='cart-btn'>Remove</button>
        </div>
    );
};

export default Reviewitem;