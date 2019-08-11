import React from "react";
import { ThemeConsumer } from "context/ThemeContext";
import styles from "./styles.module.css";

const Results = ({ children, onScrollEnd }) => {
  const handleScroll = x => {
    const { scrollTop, scrollHeight, clientHeight } = x.target;
    const isEnd = scrollHeight - scrollTop === clientHeight;
    if (isEnd) onScrollEnd();
  };

  return (
    <ThemeConsumer>
      {theme => (
        <div
          className={
            "scroll " +
            styles.results +
            " " +
            (theme === "dark" ? styles.results_dark : "")
          }
          onScroll={handleScroll}
        >
          {children}
        </div>
      )}
    </ThemeConsumer>
  );
};

export default Results;
