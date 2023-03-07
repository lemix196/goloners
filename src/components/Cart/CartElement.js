import React from "react";

import CartElementButton from "./CartElementButton";

const CartElement = (props) => {
  return (
    <li>
      <h2>{props.dishName}</h2>
      <h4>
        {props.price}
        <span>{props.quantity}</span>
      </h4>
      <button>-</button>
      <button>+</button>
    </li>
  );
};

export default CartElement;
