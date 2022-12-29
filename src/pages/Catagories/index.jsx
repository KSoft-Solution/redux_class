import React from "react";
import { Message } from "../../components";
import styles from "./index.module.scss";

const Category = () => {
  return (
    <div className={styles.container}>
      <Message type="warning" text="warning your mail sent successful" />
      from categories
    </div>
  );
};

export default Category;
