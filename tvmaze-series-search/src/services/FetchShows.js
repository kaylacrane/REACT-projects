export default () => {
  return fetch('http://api.tvmaze.com/search/shows?q=girls')
    .then((response) => response.json())
    .then((shows) => shows);
};
