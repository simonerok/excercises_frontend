"use strict";

/* Globale variabler */
const model = [];
/* Generates random customer number */

const bars = document.querySelector("#bars");

window.addEventListener("DOMContentLoaded", getRandomBars());

/* function getNumberOfCustomers() {
  
  return Math.floor(Math.random() * 32);
} */

getNumberOfCustomers();
/* Faker data til køen: giver et komplet tilfældigt tal fra 0-40 og sætter det ind i et array (model) i for iterator*/
function getNumberOfCustomers() {
  for (let i = 0; i < 40; i++) {
    model.push(Math.floor(Math.random() * 41));
    console.log(model);
  }
}

/* CREATE BARS (40)  */
function getRandomBars() {
  /* loop der kører fra 0 - 40 (i for iterations) */
  for (let i = 0; i < 40; i += 1) {
    /* setTimeout laver delay */
    setTimeout(() => {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      /* sætter bars ind uden html */
      bars.appendChild(bar);
      /* modificere højden for hver bar */
      bar.style.height = model[i] + "px";
      getNumberOfCustomers();
    }, i * 1000);

    console.log("bar");
  }
}
