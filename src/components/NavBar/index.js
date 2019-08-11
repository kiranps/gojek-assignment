import React from "react";
import styles from "./styles.module.css";

const NavBar = ({ children }) => <nav className={styles.nav}>{children}</nav>;

export default NavBar;
