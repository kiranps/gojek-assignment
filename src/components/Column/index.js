import React from "react";
import styles from "./styles.module.css";

const Column = ({ children }) => (
  <div className={styles.column}>{children}</div>
);

export default Column;
