import { useState, useEffect } from "react";
const DOMAIN = "https://api.giphy.com/";
const KEY = "upRAglSKfcxmYqFMCWGOlS1SXoxnyLIF";

const search = (query, offset = 0) => {
  const ENDPOINT = "v1/gifs/search";
  const QUERY_PARAMS = `?api_key=${KEY}&q=${query}&limit=25&offset=${offset}&rating=G&lang=en`;

  return fetch(DOMAIN + ENDPOINT + QUERY_PARAMS)
    .then(response => response.json())
    .then(response => response.data)
    .then(data =>
      data.map(x => ({
        id: x.id,
        title: x.title,
        image: x.images.downsized_still
      }))
    );
};

export const useGifs = () => {
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchGifs = query => {
    search(query, offset).then(data => {
      setGifs(images => [...images, ...data]);
      setOffset(offset => offset + 1);
    });
  };

  return [gifs, fetchGifs];
};
