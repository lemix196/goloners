import React, { useState } from "react";

const AuthContext = React.createContext({
  cartItemsQuantity: 0,
  cartItemsCost: 0,
  countItems: () => {},
  countCost: () => {},
});

export const AuthContextProvider = (props) => {
  const [countItems, setCountItems] = useState(0);
  const [countCost, setCountCost] = useState(0);

  const countItemsHandler = (dishQuantity) => {
    setCountItems(countItems + dishQuantity);
    console.log(countItems);
  };

  const countCostHandler = (dishPrice) => {
    setCountCost(countCost + dishPrice);
  };

  return (
    <AuthContext.Provider
      value={{
        cartItemsQuantity: countItems,
        cartItemsCost: countCost,
        countItems: countItemsHandler,
        countCost: countCostHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
