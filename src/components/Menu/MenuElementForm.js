import React, { useState } from "react";

import styles from "./MenuElementForm.module.css";

const MenuElementForm = (props) => {
  const [dishQuantity, setDishQuantity] = useState("0");

  const dishQuantityHandler = (event) => {
    setDishQuantity(event.target.value);
  };

  const dishSubmitHandler = (event) => {
    event.preventDefault();

    const dish = { ...props.dish, quantity: dishQuantity };

    setDishQuantity("0");
    console.log(dish);
    return dish;
  };

  return (
    <form className={styles["add-dish-form"]} onSubmit={dishSubmitHandler}>
      <label className={styles["add-dish-form-label"]}>Amount</label>
      <input
        className={styles["add-dish-form-input"]}
        type="number"
        value={dishQuantity}
        onChange={dishQuantityHandler}
      ></input>
      <button className={styles["add-dish-form-button"]}>+ Add</button>
    </form>
  );
};

export default MenuElementForm;
