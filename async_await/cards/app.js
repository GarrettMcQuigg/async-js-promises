$(function () {
  let apiURL = "https://deckofcardsapi.com/api/deck";

  async function cards1() {
    let res = await $.getJSON(`${apiURL}/new/draw/`);
    let { suit, val } = res.cards[0];
    console.log(`Your card is the ${val} of ${suit}.`);
  }

  async function cards2() {
    let card = await $.getJSON(`${apiURL}/new/draw/`);
    let deckId = card.deck_id;
    let card2 = await $.getJSON(`${apiURL}/${deckId}/draw/`);
    [card, card2].forEach((card) => {
      let { suit, value } = card.cards[0];
      console.log(`Your card is the ${value} of ${suit}`);
    });
  }
});
