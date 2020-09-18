import React from 'react';
import { CartModel } from './cart.model';

const Cart: React.FC<CartModel> = (props) => {
  return (
    <div>
      <h3>{props.totalPrice}</h3>
      <button onClick={props.onResetPrice}>Reset</button>
    </div>
  );
};

export default Cart;
