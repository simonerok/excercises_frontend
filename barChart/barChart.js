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
/* Faker data til køen: giver et komplet tilfældigt tal fra 0-32 */
function getNumberOfCustomers() {
  for (let i = 0; i < 40; i++) {
    model.push(Math.floor(Math.random() * 41));
    console.log(model);
  }
}

/* MODIFY HIGHT OF SINGLE BAR */

/* CREATE BARS (40 der er 8 pt) */
function getRandomBars() {
  /* loop der kører fra 0 - 40 (i for iterations) */
  for (let i = 0; i < 40; i += 1) {
    /* setTimeout laver delay */
    setTimeout(() => {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      /* sætter bars ind uden html */
      bars.appendChild(bar);
      bar.style.height = model[i] + "px";
      getNumberOfCustomers();
    }, i * 1000);

    console.log("bar");
    /* delay så alle bokse ikke kommer ind på samme tid */
  }
}

/* CALCULATION */

/* DISPLAY (der skal vises 40 ad gangen)*/
/* random array on 40 numbers */
