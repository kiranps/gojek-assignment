import React, { useState } from "react";
import styles from "./styles.module.css";

const Toggle = ({ value, onChange }) => {
  const [active, toggle] = useState(value);

  const handleToggle = () => {
    toggle(active => !active);
    onChange(!active);
  };

  return (
    <div className={styles.toggle}>
      <div className={styles.label}>Dark</div>
      <svg
        className={styles.icon}
        style={{ width: "42px", height: "42px", cursor: "pointer" }}
        viewBox="0 0 24 24"
        onClick={handleToggle}
      >
        {active ? (
          <path
            fill="#4CAF50"
            d="M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z"
          />
        ) : (
          <path
            fill="#b5b5b5"
            d="M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"
          />
        )}
      </svg>
    </div>
  );
};

Toggle.defaultProps = {
  active: false
};

export default Toggle;
