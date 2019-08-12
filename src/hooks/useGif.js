import { useState, useRef } from "react";
import { search } from "services/gify";

const useGifs = () => {
  const [gifs, setGifs] = useState([]);
  const query = useRef(0);
  const offset = useRef(0);

  const fetchGifs = str => {
    if (str !== query.current) {
      query.current = str;
      offset.current = 0;
      setGifs([]);
    }

    search(query.current, offset.current).then(data => {
      setGifs(images => [...images, ...data]);
      offset.current++;
    });
  };

  return [gifs, fetchGifs];
};

export default useGifs;
