import React from "react";

import styles from "./MenuElementForm.module.css";

const MenuElementForm = () => {
  return (
    <form className={styles['add-dish-form']}>
      <label className={styles['add-dish-form-label']}>Amount</label>
      <input className={styles['add-dish-form-input']} type="number"></input>
      <button className={styles['add-dish-form-button']}>+ Add</button>
    </form>
  );
};

export default MenuElementForm;
