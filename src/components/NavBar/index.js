import React from "react";
import styles from "./styles.module.css";
import { ThemeConsumer } from "context/ThemeContext";

const NavBar = ({ children }) => (
  <ThemeConsumer>
    {theme => (
      <nav
        className={styles.nav + " " + (theme === "dark" ? styles.nav_dark : "")}
      >
        {children}
      </nav>
    )}
  </ThemeConsumer>
);

export default NavBar;
