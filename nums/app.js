get("http://numbersapi.com/random/number?json");

const apiURL = "http://numbersapi.com";
let randomNum = 2;

$.getJSON(`${apiURL}/${randomNum}?json`).then((res) => {
  console.log(res);
});

let multipleNums = [1, 4, 8, 5];

$.getJSON(`${apiURL}/${multipleNums}?json`).then((res) => {
  console.log(res);
});

Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${randomNum}?json`);
  })
).then((randomFact) => {
  randomFact.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
