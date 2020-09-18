import React, { useState } from 'react';
import './App.css';
import Drink from './Drink';
import Cart from './Cart';

const App: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const addDrinkHandler = (price: number) => {
    setTotalPrice(totalPrice + price);
  };

  const resetPriceHandler = () => {
    setTotalPrice(0);
  };

  return (
    <div className="App">
      <Drink name="Mojito" price={3} onAddDrink={addDrinkHandler} />
      <Drink name="Beer" price={2} onAddDrink={addDrinkHandler} />
      <Drink name="Red Wine" price={1} onAddDrink={addDrinkHandler} />
      <Drink name="White Wine" price={1} onAddDrink={addDrinkHandler} />
      <Drink name="Gin & Tonic" price={8} onAddDrink={addDrinkHandler} />
      <Drink name="Tequila Shot" price={1} onAddDrink={addDrinkHandler} />
      <Cart totalPrice={totalPrice} onResetPrice={resetPriceHandler}></Cart>
    </div>
  );
};

export default App;
