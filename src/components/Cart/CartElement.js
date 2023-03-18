import React, { useContext } from "react";

import styles from "./CartElement.module.css";
import CartElementButton from "./CartElementButton";

const CartElement = (props) => {

  return (
    <React.Fragment>
      <li className={styles["cart-element"]}>
        <h2 className={styles["cart-element-name"]}>{props.dish.dishName}</h2>
        <h4 className={styles["cart-element-price"]}>
          {props.dish.price}$
          <span className={styles["cart-element-quantity"]}>
            x{props.dish.quantity}
          </span>
        </h4>
        <div className={styles["cart-element-buttons"]}>
          <CartElementButton dishId={props.dish.id} buttonText="-" />
          <CartElementButton dishId={props.dish.id} buttonText="+" />
        </div>
      </li>
      <hr />
    </React.Fragment>
  );
};

export default CartElement;
