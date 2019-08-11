import React from "react";
import styles from "./styles.module.css";

const Results = ({ children, onScrollEnd }) => {
  const handleScroll = x => {
    const { scrollTop, scrollHeight, clientHeight } = x.target;
    const isEnd = scrollHeight - scrollTop === clientHeight;
    if (isEnd) onScrollEnd();
  };

  return (
    <div className={styles.results} onScroll={handleScroll}>
      {children}
    </div>
  );
};

export default Results;
