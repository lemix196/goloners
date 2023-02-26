import React from "react";

import styles from './MenuCard.module.css'

const MenuCard = (props) => {
    return (
        <div className={styles['menu-card']}>
            {props.children}
            <p>Here are our products</p>
            <p>Product 1</p>
            <p>Product 2</p>
            <p>Product 3</p>
            <p>Product 4</p>
        </div>
    );
};

export default MenuCard

