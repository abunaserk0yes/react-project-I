import React from 'react';
import './Cart.css'

const Cart = (props) => {
     const cart=props.cart
     const FormateNumber=(number)=>{
        const precision=number.toFixed(2)
        return Number(precision)
     }
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;  
    }
    let Shipping=0
    if(total>0){
        Shipping=4.99
    }
    else if(total>10){
        Shipping=12.99
    }
    else if(total>35){
        Shipping=0
    }
    let Tax=total*0.1
    return (
        <div>
         <h2 className='text-primary'>Cart Amount</h2>
         <h5>Items Ordered:{cart.length}</h5>
         <h4>Product Price:{FormateNumber(total)}</h4>
         <p>Shipping Cost:{FormateNumber(Shipping)}</p>
         <p><small>Tax Or Vat:{FormateNumber(Tax)}</small></p>
         <h3>Total:{FormateNumber(total+Shipping+Tax)}</h3>
        </div>
    );
};

export default Cart;