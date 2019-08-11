import React, { useState, useEffect } from "react";
import NavBar from "components/NavBar";
import Search from "components/Search";
import Results from "components/Results";
import Column from "components/Column";
import Gif from "components/Gif";
import { useGifs } from "services/gify";
import * as R from "ramda";

const totalHeight = R.reduce((acc, x) => acc + Number(x.image.height), 0);

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

function App() {
  const [images, setImages] = useState([[], [], [], []]);
  const [gifs, fetchGifs] = useGifs();

  useEffect(() => {
    fetchGifs("hello");
  }, []);

  useEffect(() => {
    setImages(balanceColumns(gifs, images));
  }, [gifs]);

  const handleScrollEnd = () => {
    fetchGifs("hello");
    console.log("end reached");
  };

  return (
    <div>
      <NavBar>
        <Search />
      </NavBar>
      <Results onScrollEnd={handleScrollEnd}>
        {images.map((x, i) => (
          <Column key={i}>
            {x.map((x, i) => (
              <Gif key={i} src={x.image.url} />
            ))}
          </Column>
        ))}
      </Results>
    </div>
  );
}

export default App;
