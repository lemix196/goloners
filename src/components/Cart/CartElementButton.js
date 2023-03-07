import React from "react";

import styles from "./CartElementButton.module.css";

const CartElementButton = (props) => {
  return (
    <button className={styles["cart-element-button"]}>
      {props.buttonText}
    </button>
  );
};

export default CartElementButton;
