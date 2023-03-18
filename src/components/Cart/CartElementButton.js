import React, { useContext } from "react";

import styles from "./CartElementButton.module.css";
import AuthContext from "../../store/auth-context";

const CartElementButton = (props) => {
  const ctx = useContext(AuthContext);

  const quantityChangeHandler = () => {
    if (props.buttonText === "-") {
      ctx.dishDecrease(props.dishId);
    } else {
      ctx.dishIncrease(props.dishId);
    }
  };

  return (
    <button onClick={quantityChangeHandler} className={styles["cart-element-button"]}>
      {props.buttonText}
    </button>
  );
};

export default CartElementButton;
