let favNum = 14;
const apiURL = "http://numbersapi.com";

async function numFacts1() {
  let res = await $.getJSON(`${apiURL}/${favNum}?json`);
  console.log(res);
}

numFacts1();

let multipleNums = [1, 34, 6, 8];

async function numFacts2() {
  let res = await $.getJSON(`${apiURL}/${multipleNums}?json`);
  console.log(res);
}

numFacts2();

async function numFacts3() {
  let res = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${apiURL}/${favNum}?json`))
  );
  res.forEach(data => {
    $('body').append(`<p>${data.text}</p>`)
  })
}

numFacts3();
