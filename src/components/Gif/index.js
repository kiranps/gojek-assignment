import React, { useState } from "react";
import styles from "./styles.module.css";

const Layout = ({ image }) => {
  const [isLoaded, setStatus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.imgbox}>
      {!isLoaded && (
        <img
          alt={image.id}
          height={image.still.height}
          width={image.still.width}
          className={styles.placeholder}
        />
      )}
      {hover ? (
        <img
          className={styles.img}
          alt={image.id}
          src={image.gif.url}
          onMouseOut={_ => setHover(false)}
        />
      ) : (
        <img
          alt={image.id}
          style={{ display: isLoaded ? "block" : "none" }}
          className={styles.img}
          src={image.still.url}
          onLoad={_ => setStatus(true)}
          onMouseOver={_ => setHover(true)}
        />
      )}
    </div>
  );
};

export default Layout;
