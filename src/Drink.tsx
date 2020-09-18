import React from 'react';
import { DrinkModel } from './drink.model';

const Drink: React.FC<DrinkModel> = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <button onClick={() => props.onAddDrink(props.price)}>Add To Cart</button>
    </div>
  );
};

export default Drink;
