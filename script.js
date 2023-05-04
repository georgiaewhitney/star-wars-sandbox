let baseURL = "https://swapi.dev/api/people/";
let person = document.getElementById("character")
let charNumber = Math.floor((Math.random() * 83) + 1)

fetch(baseURL + charNumber)
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    person.innerHTML = `<h2>${json.name}</h2>`
  });
