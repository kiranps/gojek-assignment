import React, { useState, useEffect } from "react";
import NavBar from "components/NavBar";
import Search from "components/Search";
import Results from "components/Results";
import Column from "components/Column";
import Gif from "components/Gif";
import Toggle from "components/Toggle";
import useGifs from "hooks/useGif";
import useResponsive from "hooks/useResponsive";
import * as R from "ramda";
import { ThemeProvider } from "context/ThemeContext";

const totalHeight = R.reduce((acc, x) => acc + Number(x.still.height), 0);

const reduceIndex = R.addIndex(R.reduce);

const minHeight = arr =>
  reduceIndex((acc, x, i) => (acc[1] > x ? [i, x] : acc), [0, arr[0]], arr)[0];

const insertToMinHeightArray = (index, item, arr) =>
  R.update(index, R.append(item, arr[index]), arr);

const balanceColumns = (data, store) => {
  return data.reduce((acc, x) => {
    const index = R.pipe(
      R.map(totalHeight),
      minHeight
    )(acc);

    return insertToMinHeightArray(index, x, acc);
  }, store);
};

const gridColumns = x =>
  x === "mobile" ? [[]] : x === "tablet" ? [[], []] : [[], [], [], []];

function App() {
  const { device } = useResponsive();
  const [images, setImages] = useState(gridColumns(device));
  const [keywords, setKeyWords] = useState();
  const [gifs, fetchGifs] = useGifs();
  const [theme, changeTheme] = useState("light");

  useEffect(() => {
    const initData = gridColumns(device);
    setImages(images => balanceColumns(gifs, initData));
  }, [gifs, device]);

  const handleScrollEnd = () => {
    fetchGifs(keywords);
    console.log("end reached");
  };

  const handleSearch = values => {
    const keywords = values.join(" ");
    fetchGifs(keywords);
    setKeyWords(keywords);
  };

  return (
    <ThemeProvider value={theme}>
      <NavBar>
        <Search onChange={handleSearch} />
        <Toggle
          label="Dark"
          onChange={value => changeTheme(value ? "dark" : "light")}
        />
      </NavBar>
      <Results onScrollEnd={handleScrollEnd}>
        {images.map((x, i) => (
          <Column key={i}>
            {x.map((x, i) => (
              <Gif key={i} image={x} />
            ))}
          </Column>
        ))}
      </Results>
    </ThemeProvider>
  );
}

export default App;
