import React from "react";

import styles from "./MenuCard.module.css";

import MenuElement from "../Menu/MenuElement";
import MenuElementForm from "../Menu/MenuElementForm";
import MENU_DATA from "../Menu/menuData";

const MenuCard = (props) => {
  return (
    <div className={styles["menu-card"]}>
      {MENU_DATA.map((dish) => (
        
        <React.Fragment>
          <MenuElement
            dishName={dish.dishName}
            description={dish.description}
            price={dish.price}
          />
          <MenuElementForm dish={dish}/>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuCard;
