import React, { useState } from "react";

const AuthContext = React.createContext({
  cartItemsQuantity: 0,
  cartItemsCost: 0,
  countItems: () => {},
  countCost: () => {},
  updateCart: () => {},
});

export const AuthContextProvider = (props) => {
  const [countItems, setCountItems] = useState(0);
  const [countCost, setCountCost] = useState(0);
  const [cartList, updateCart] = useState([]);

  const countItemsHandler = (dishQuantity) => {
    setCountItems(countItems + dishQuantity);
  };

  const countCostHandler = (dishObj) => {
    const sum =
      parseFloat(countCost) +
      parseInt(dishObj.quantity) * parseFloat(dishObj.price);
    setCountCost(sum.toString());
  };

  const updateCartHandler = (dishObject) => {
    if (cartList.length === 0) {
      updateCart([...cartList, dishObject]);
      return null;
    }

    for (const obj of cartList) {
      if (obj.id === dishObject.id) {
        obj.quantity = (
          parseInt(obj.quantity) + parseInt(dishObject.quantity)
        ).toString();
        return null;
      }
    }
    updateCart([...cartList, dishObject]);
  };

  const dishIncreaseHandler = (dishId) => {
    for (const obj of cartList) {
      if (obj.id === dishId) {
        obj.quantity = parseInt(obj.quantity) + 1;
        updateCart([...cartList]);
        setCountItems(countItems + 1);
        setCountCost(parseFloat(countCost) + parseFloat(obj.price));
        return null;
      }
    }
  };

  const dishDecreaseHandler = (dishId) => {
    for (const obj of cartList) {
      if (obj.id === dishId) {
        obj.quantity = parseInt(obj.quantity) - 1;
        updateCart([...cartList]);
        setCountItems(countItems - 1);
        setCountCost(parseFloat(countCost) - parseFloat(obj.price));
        return null;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        cartItemsQuantity: countItems,
        cartItemsCost: countCost,
        countItems: countItemsHandler,
        countCost: countCostHandler,
        updateCart: updateCartHandler,
        dishIncrease: dishIncreaseHandler,
        dishDecrease: dishDecreaseHandler,
        cartList: cartList,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
