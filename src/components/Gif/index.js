import React, { useState } from "react";
import styles from "./styles.module.css";

const Gif = ({ image }) => {
  const [isLoaded, setStatus] = useState(false);
  const [play, setPlay] = useState(false);

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
      {play ? (
        <img
          className={styles.img}
          alt={image.id}
          src={image.gif.url}
          onClick={_ => setPlay(false)}
        />
      ) : (
        <img
          alt={image.id}
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
          className={styles.img}
          src={image.still.url}
          onLoad={_ => setStatus(true)}
          onClick={_ => setPlay(true)}
        />
      )}
    </div>
  );
};

export default Gif;
