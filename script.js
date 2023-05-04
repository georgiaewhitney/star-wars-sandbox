const baseURL = "https://swapi.dev/api/people/";
const person = document.getElementById("character")
const button = document.getElementById("charButton")

function generateCharacter() {
  let charNumber = Math.floor((Math.random() * 83) + 1);
  fetch(baseURL + charNumber)
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    person.innerHTML = `
      <h2>${json.name}</h2>
      <h3>Born: ${json.birth_year}</h3>
    `
  });
}


