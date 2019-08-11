import React, { useState } from "react";
import styles from "./styles.module.css";

const Layout = ({ image }) => {
  const [isLoaded, setStatus] = useState(false);

  return (
    <div className={styles.imgbox}>
      {!isLoaded && (
        <img
          height={image.height}
          width={image.width}
          className={styles.placeholder}
        />
      )}
      <img
        style={{ display: isLoaded ? "block" : "none" }}
        className={styles.img}
        src={image.url}
        onLoad={_ => setStatus(true)}
      />
    </div>
  );
};

export default Layout;
