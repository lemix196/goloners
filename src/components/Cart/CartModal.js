import React from "react";

import styles from "./CartModal.module.css";

import CartElement from "./CartElement";
import CartMainButtons from "./CartMainButtons";

const CartModal = (props) => {
  return (
    <div className={styles["cart-modal"]}>
      <div className={styles["cart-modal-window"]}>
        <h2 className={styles["h2"]}>
          Your order:
          <span className={styles["cart-modal-close"]}>&times;</span>
        </h2>
        <ul>
          <CartElement />
        </ul>
        <div className={styles["cart-modal-total"]}>
          <h2>Total:</h2>
          <h2>20.00$</h2>
        </div>
        <CartMainButtons hideModal={props.hideCart} />
      </div>
    </div>
  );
};

export default CartModal;
