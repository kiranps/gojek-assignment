import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { ThemeConsumer } from "context/ThemeContext";
import * as R from "ramda";

const setTheme = (theme, style) => (theme === "dark" ? " " + style : "");

const Close = ({ onClick }) => (
  <svg
    className={styles.close}
    fill="#adadad"
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
  </svg>
);

const Search = ({ onChange }) => {
  const inputDiv = useRef(null);
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

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

  const handleSubmit = () => {
    const newTags = [...tags, value];
    setTags(newTags);
    setValue("");
    onChange(newTags);
  };

  const handleClose = index => {
    const newTags = R.remove(index, 1, tags);
    setTags(newTags);
    onChange(newTags);
  };

  const width = inputDiv.current
    ? inputDiv.current.offsetWidth + 50 + "px"
    : "50px";

  return (
    <ThemeConsumer>
      {theme => (
        <div
          className={styles.search + setTheme(theme, styles.search_dark)}
          onClick={_ => inputRef.current.focus()}
        >
          {tags.map((x, i) => (
            <div
              key={i}
              className={styles.keyword + setTheme(theme, styles.keyword_dark)}
            >
              <div className={styles.label}>{x}</div>
              <Close onClick={_ => handleClose(i)} />
            </div>
          ))}
          <div ref={inputDiv} className={styles.hidden}>
            {value}
          </div>
          <input
            value={value}
            ref={inputRef}
            className={styles.input + setTheme(theme, styles.input_dark)}
            onChange={handleChange}
            style={{ width }}
            placeholder="Search"
          />
          <button
            className={styles.button + setTheme(theme, styles.button_dark)}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </ThemeConsumer>
  );
};

Search.defaultProps = {
  onChange: _ => {}
};

export default Search;
