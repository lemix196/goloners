import React, { useContext } from "react";

import styles from "./CartModal.module.css";

import CartElement from "./CartElement";
import CartMainButtons from "./CartMainButtons";
import AuthContext from "../../store/auth-context";

const CartModal = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={styles["cart-modal"]}>
      <div className={styles["cart-modal-window"]}>
        <h2 className={styles["h2"]}>
          Your order:
          <span className={styles["cart-modal-close"]} onClick={props.hideCart}>
            &times;
          </span>
        </h2>
        <ul>
          {ctx.cartList.map((cartElement) => (
            <CartElement dish={cartElement} />
          ))}
        </ul>
        <div className={styles["cart-modal-total"]}>
          <h2>Total:</h2>
          <h2>{ctx.cartItemsCost} $</h2>
        </div>
        <CartMainButtons hideModal={props.hideCart} />
      </div>
    </div>
  );
};

export default CartModal;
