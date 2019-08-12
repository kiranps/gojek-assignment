const DOMAIN = process.env.REACT_APP_API_URL;
const GIPHY_TOKEN = process.env.REACT_APP_GIPHY_TOKEN;

export const search = (query, offset = 0) => {
  const ENDPOINT = "v1/gifs/search";
  const QUERY_PARAMS = `?api_key=${GIPHY_TOKEN}&q=${query}&limit=25&offset=${offset}&rating=G&lang=en`;

  return fetch(DOMAIN + ENDPOINT + QUERY_PARAMS)
    .then(response => response.json())
    .then(response => response.data)
    .then(data =>
      data.map(x => ({
        id: x.id,
        title: x.title,
        still: x.images.downsized_still,
        gif: x.images.preview_webp
      }))
    );
};
