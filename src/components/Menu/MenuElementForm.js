import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";

import styles from "./MenuElementForm.module.css";

const MenuElementForm = (props) => {
  const ctx = useContext(AuthContext);

  const [dishQuantity, setDishQuantity] = useState(0);

  const dishQuantityHandler = (event) => {
    setDishQuantity(event.target.value);
  };

  const dishSubmitHandler = (event) => {
    event.preventDefault();

    // Add dish quantity for cart counting
    const dish = { ...props.dish, quantity: dishQuantity };

    // Update cart
    ctx.updateCart(dish)

    // Update summary cost
    setDishQuantity(0);
    ctx.countItems(parseInt(dish.quantity));
    ctx.countCost(dish);
    return dish;
  };

  return (
    <form className={styles["add-dish-form"]}>
      <label className={styles["add-dish-form-label"]}>Amount</label>
      <input
        className={styles["add-dish-form-input"]}
        type="number"
        value={dishQuantity}
        onChange={dishQuantityHandler}
      ></input>
      <button
        className={styles["add-dish-form-button"]}
        onClick={dishSubmitHandler}
      >
        + Add
      </button>
    </form>
  );
};

export default MenuElementForm;
