import React, { useState } from "react";

import styles from "./MenuElementForm.module.css";

const MenuElementForm = () => {
  const [dishQuantity, setDishQuantity] = useState("0");

  const dishQuantityHandler = (event) => {
    setDishQuantity(event.target.value);
    console.log(dishQuantity);
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
      <button className={styles["add-dish-form-button"]}>+ Add</button>
    </form>
  );
};

export default MenuElementForm;
