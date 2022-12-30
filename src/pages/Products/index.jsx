import React, { useEffect } from "react";
import { Loader, Message } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "./redux/action";
import styles from "./index.module.scss";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {loading && <Loader />}
      {error && <Message type="error" text={error} />}
      {data &&
        data.map((elm) => (
          <div key={elm.id}>
            <div>{elm.title}</div>
            <br />
          </div>
        ))}
    </div>
  );
};

export default Products;
