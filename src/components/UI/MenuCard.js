import React from "react";

import styles from "./MenuCard.module.css";

import MenuElement from "../Menu/MenuElement";
import MENU_DATA from "../Menu/menuData";

const MenuCard = (props) => {
  return (
    <div className={styles["menu-card"]}>
      {MENU_DATA.map((dish) => (
        <MenuElement dishName={dish.dishName} description={dish.description} price={dish.price}/>
      ))}
    </div>
  );
};

export default MenuCard;
