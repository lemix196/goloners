import React from "react";

import classes from "./Navbar.module.css";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h2 className={classes["navbar-title"]}>Goloners</h2>
      <button className={classes["navbar-button"]}>
        <CartIcon />
        Cart
        <span>2</span>
      </button>
    </div>
  );
};

export default Navbar;
