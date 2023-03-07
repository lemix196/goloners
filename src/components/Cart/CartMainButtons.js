import React from "react";

import styles from "./CartMainButtons.module.css"

const CartMainButtons = () => {
    return (
        <React.Fragment>
            <button className={styles["cancel-button"]}>Cancel</button>
            <button className={styles["confirm-button"]}>Order</button>
        </React.Fragment>
    );
};


export default CartMainButtons;

