// fetch("https://striveschool-api.herokuapp.com/api/agenda")
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json
// .then((response) => response.json()) // Abbiamo una promise restituita qui
// .then((json) => console.log(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
// .catch((err) => console.log("Error detected: ", err) );

const myBody = {};

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
.then((response) => response.json)
.then((json) => console.log(json[0]))
.catch((err) => console.log("Error detected: ", err));