import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import styles from "./styles.module.css";

const Search = ({ onChange }) => {
  const inputDiv = useRef(null);
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const text = e.target.value;
    if (text.length > 1 && text.slice(-1) === " ") {
      const newTags = [...tags, text.slice(0, -1)];
      setValue("");
      setTags(newTags);
      onChange(newTags);
    } else {
      setValue(text);
    }
  };

  const width = inputDiv.current
    ? inputDiv.current.offsetWidth + 10 + "px"
    : "10px";

  return (
    <div className={styles.search}>
      {tags.map((x, i) => (
        <div key={i} className={styles.keyword}>
          {x}
        </div>
      ))}
      <div ref={inputDiv} className={styles.hidden}>
        {value}
      </div>
      <input
        value={value}
        ref={inputRef}
        className={styles.input}
        onChange={handleChange}
        style={{ width }}
      />
    </div>
  );
};

export default Search;
