import React from "react";

import styles from "./CartModal.module.css";

import CartElement from "./CartElement";

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
      </div>
    </div>
  );
};

export default CartModal;
