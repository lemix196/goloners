import React from "react";

import styles from "./MenuElement.module.css";

const MenuElement = (props) => {
  return (
    <React.Fragment>
      <h2>{props.dishName}</h2>
      <p>{props.description}</p>
      <h2>{props.price}</h2>
      <hr/>
    </React.Fragment>
  );
};

export default MenuElement;
