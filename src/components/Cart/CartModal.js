import React from "react";

import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <div className={classes["cart-modal"]}>
      <div className={classes["cart-modal-window"]}>
        <h2 className={classes["h2"]}>
          Your order:
          <span className={classes["cart-modal-close"]}>&times;</span>
        </h2>

        {props.children}
      </div>
    </div>
  );
};

export default CartModal;
