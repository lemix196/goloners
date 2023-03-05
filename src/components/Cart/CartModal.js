import React from "react";

import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <div className={classes["cart-modal"]}>
      <div className={classes["cart-modal-content"]}>{props.children}</div>
    </div>
  );
};

export default CartModal;
