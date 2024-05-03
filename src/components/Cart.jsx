import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const items = useSelector(state=>state);
    const total = items.Cart.reduce((acc,currentValue)=>acc+currentValue.price,0);
    console.log(items);
    return (
        <div className='alert alert-success'>
            <h3 className='text-center'>Total Itmes: {items.Cart.length} (Rs. {total})</h3>
        </div>
    );
}

export default Cart;
