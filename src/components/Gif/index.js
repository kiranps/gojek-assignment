import React from "react";
import styles from "./styles.module.css";

const Layout = ({ src }) => (
  <div className={styles.imgbox}>
    <img className={styles.img} src={src} />
  </div>
);

export default Layout;
