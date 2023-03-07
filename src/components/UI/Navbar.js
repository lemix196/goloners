import React, { useContext } from "react";

import styles from "./Navbar.module.css";
import CartIcon from "./CartIcon";
import AuthContext from "../../store/auth-context";

const Navbar = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <h2 className={styles["navbar-title"]}>Goloners</h2>
      <button className={styles["navbar-button"]} onClick={props.showCart}>
        <CartIcon />
        Cart
        <span>{ctx.cartItemsQuantity}</span>
      </button>
    </div>
  );
};

export default Navbar;
