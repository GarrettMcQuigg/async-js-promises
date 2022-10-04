$(function () {
  let apiURL = "https://deckofcardsapi.com/api/deck";

  $.getJSON(`${apiURL}/new/draw/`).then((res) => {
    let { suit, val } = res.cards[0];
    console.log(`${val.toLowerCase()} of ${suit.toLowerCase()}`);
  });

  let initCard = null;
  $.getJSON(`${apiURL}/new/draw/`)
    .then((data) => {
      initCard = data.cards[0];
      let deckId = data.deck_id;
      return $.getJSON(`${apiURL}/${deckId}/draw/`);
    })
    .then((data) => {
      let secondCard = data.cards[0];
      [initCard, secondCard].forEach(function (card) {
        console.log(`${card.val.toLowerCase()} of ${card.suit.toLowerCase()}`);
      });
    });

  let deckId = null;
  let $btn = $("button");
  let $content = $("#content");

  $.getJSON(`${apiURL}/new/shuffle/`).then((data) => {
    deckId = data.deck_id;
    $btn.show();
  });

  $btn.on("click", function () {
    $.getJSON(`${apiURL}/${deckId}/draw/`).then((data) => {
      let cardSource = data.cards[0].image;
      $content.append(
        $("<img>", {
          src: cardSource,
        })
      );
      if (data.remaining === 0) $btn.remove();
    });
  });
});
