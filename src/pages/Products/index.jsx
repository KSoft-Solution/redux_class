import React from "react";
import { Loader,Message } from "../../components";
import styles from "./index.module.scss";

const Products = () => {
  return (
    <div className={styles.container}>
      <Loader />
      <Message type='error' text='your mail sent unsuccessful'/>
      from products
    </div>
  );
};

export default Products;
