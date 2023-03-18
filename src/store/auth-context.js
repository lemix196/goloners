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
    if (sum < 0) {
      setCountCost(0);
    } else {
      setCountCost(sum.toString());
    }
  };

  const updateCartHandler = (dishObject) => {
    // add first dish object
    if (cartList.length === 0) {
      updateCart([...cartList, dishObject]);
      return null;
    }

    // change quantity if cartList contains dish object of given ID
    for (const obj of cartList) {
      if (obj.id === dishObject.id) {
        obj.quantity = (
          parseInt(obj.quantity) + parseInt(dishObject.quantity)
        ).toString();
        return null;
      }
    }

    // add new dish object to cart if cartList does not contain it
    updateCart([...cartList, dishObject]);
  };

  const dishIncreaseHandler = (dishId) => {
    for (const obj of cartList) {
      if (obj.id === dishId) {
        obj.quantity = parseInt(obj.quantity) + 1;
        updateCart([...cartList]);
        setCountItems(countItems + 1);
        const summaryPrice = parseFloat(countCost) + parseFloat(obj.price);
        setCountCost(summaryPrice);
        return null;
      }
    }
  };

  const dishDecreaseHandler = (dishId) => {
    for (const obj of cartList) {
      if (obj.id === dishId) {
        // remove element from cart if quantity decreases to 0
        if (obj.quantity < 1) {
          const ind = cartList.indexOf(obj);
          updateCart(cartList.splice(ind, 1));
          const summaryItems = countItems - 1;

          if (summaryItems < 0) {
            setCountItems(0);
          } else {
            setCountItems(countItems - 1);
          }
          const summaryPrice = parseFloat(countCost) - parseFloat(obj.price);

          if (summaryPrice < 0) {
            setCountCost(0);
          } else {
            setCountCost(summaryPrice);
          }
          return null;
        } else {
          obj.quantity = parseInt(obj.quantity) - 1;
          updateCart([...cartList]);
          setCountItems(countItems - 1);
          const summaryPrice = parseFloat(countCost) - parseFloat(obj.price);

          if (summaryPrice < 0) {
            setCountCost(0);
          } else {
            setCountCost(summaryPrice);
          }
          return null;
        }
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
