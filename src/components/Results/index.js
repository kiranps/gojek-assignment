import React from "react";
import styles from "./styles.module.css";

const Results = ({ children }) => (
  <div className={styles.results}>{children}</div>
);

export default Results;
