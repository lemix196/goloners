import React from "react";

import styles from "./MenuElement.module.css";

const MenuElement = (props) => {
  return (
    <div className={styles['dish']}>
      <h2 className={styles['dish-name']}>{props.dishName}</h2>
      <p className={styles['dish-description']}>{props.description}</p>
      <h2 className={styles['dish-price']}>{props.price}</h2>
      <hr className={styles['menu-separator']}/>
      </div>
  );
};

export default MenuElement;
