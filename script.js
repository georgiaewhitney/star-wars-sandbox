let baseURL = "https://swapi.dev/api/";

fetch(baseURL)
  .then((response) => response.json())
  .then((json) => console.log(json));
