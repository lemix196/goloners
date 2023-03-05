import React, { useContext } from "react";

import classes from "./Navbar.module.css";
import CartIcon from "./CartIcon";
import AuthContext from "../Menu/auth-context";

const Navbar = () => {
  const ctx = useContext(AuthContext);


  return (
    <div className={classes.navbar}>
      <h2 className={classes["navbar-title"]}>Goloners</h2>
      <button className={classes["navbar-button"]}>
        <CartIcon />
        Cart
        <span>{ctx.cartItemsQuantity}</span>
      </button>
    </div>
  );
};

export default Navbar;
