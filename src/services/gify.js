const DOMAIN = "https://api.giphy.com/";
const KEY = "upRAglSKfcxmYqFMCWGOlS1SXoxnyLIF";

export const search = query => {
  const ENDPOINT = "v1/gifs/search";
  const QUERY_PARAMS = `?api_key=${KEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`;

  return fetch(DOMAIN + ENDPOINT + QUERY_PARAMS)
    .then(response => response.json())
    .then(response => response.data)
    .then(data =>
      data.map(x => ({
        id: x.id,
        title: x.title,
        image: x.images.downsized
      }))
    );
};
