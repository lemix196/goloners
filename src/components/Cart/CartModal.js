import React from "react";

import './CartModal.module.css'

const CartModal = (props) => {
    return (
        <div className={classes['cart-modal']}>
            {props.children}
        </div>
    );
};

export default CartModal;


