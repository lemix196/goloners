import React from "react";

import styles from "./CartMainButtons.module.css"

const CartMainButtons = (props) => {
    return (
        <React.Fragment>
            <button onClick={props.hideModal} className={styles["cancel-button"]}>Cancel</button>
            <button className={styles["confirm-button"]}>Order</button>
        </React.Fragment>
    );
};


export default CartMainButtons;

