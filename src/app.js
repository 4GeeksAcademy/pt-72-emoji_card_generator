/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let btn = document.querySelector(".btn");

window.onload = function() {
  btn.addEventListener("click", function() {
    generatorEmojiCard();
  });
};

const generatorEmojiCard = () => {
  let title = document.querySelector(".card-title");
  let emoji = ["💃🏽", "🦊", "🐥", "🐸", "🪼", "☂️"];

  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];

  if (randomEmoji === "💃🏽") {
    btn.style.background = "red";
    btn.style.color = "white";
    title.innerHTML = "Felicia";
  } else if (randomEmoji === "🦊") {
    btn.style.color = "white";
    btn.style.background = "orange";
    title.innerHTML = "Foxy Brown";
  } else if (randomEmoji === "🐥") {
    btn.style.color = "black";
    btn.style.background = "yellow";
    title.innerHTML = "Norbert";
  } else if (randomEmoji === "🐸") {
    btn.style.color = "white";
    btn.style.background = "green";
    title.innerHTML = "Robert";
  } else if (randomEmoji === "🪼") {
    btn.style.color = "white";
    btn.style.background = "blue";
    title.innerHTML = "Welches";
  } else {
    btn.style.background = "purple";
    btn.style.color = "white";
    title.innerHTML = "Ella";
  }

  document.querySelector(".emoji").innerHTML = randomEmoji;
};
