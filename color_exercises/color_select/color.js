"use strict";

window.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("start");
  addEventListeners();
}

function addEventListeners() {
  document.querySelector("input").addEventListener("input", colorChance);
}
function colorChance() {
  console.log(this.value);
  /* HEX */
  /* vælger html elementet */
  let HEX_color = document.querySelector("#HEX_color");
  /* vi har lavet det om så det sidste den skriver ud er en HEX værdi derfor kan vi sætte det til at være this.value og skrive det ud via textContent i vores p tag (#HEX_color) */
  HEX_color.textContent = `HEX: ${this.value}`;
  HEXtoRGB(this.value);

  /* RGB */
  /* vælger html elementet */
  let RGB_color = document.querySelector("#RGB_color");
  /* skrives om til RGB fra HEX */
  let { red, green, blue } = HEXtoRGB(this.value);
  /* skrive det ud som textContent */
  RGB_color.textContent = `RGB: ${red} ${green} ${blue} `;

  /* HSL */
  /* vælger html */
  /* let HSL_color = document.querySelector("#HSL_color");

  let { h, s, l } = RGBtoHSL(red, green, blue);
  HSL_color.textContent =  */
}

/* Denne function gør at når man vælger en farve bliver det vist */
RGBtoHSL(this.value);
function RGBtoHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}

/* HEX TO HSL */

/* function HEXtoHSL() {
  RGBtoHEX(r, g, b);
} */

/* RGB TO HEX */
function RGBtoHEX(rVal, gVal, bVal) {
  console.log(rVal, gVal, bVal);
  /* 16 er talbasen for hexcolor */
  let rHEX = rVal.toString(16).padstart(2, 0);
  let gHEX = gVal.toString(16).padstart(2, 0);
  let bHEX = bVal.toString(16).padstart(2, 0);
  /* console.log(rHEX, gHEX, bHEX); */
  HEXtoRGB(rHEX, gHEX, bHEX);
}

/* HEX TO RGB */
function HEXtoRGB(hexcode) {
  /* 16 er talbasen for hexcolor? */
  let red = Number.parseInt(hexcode.substring(1, 3), 16);
  let green = Number.parseInt(hexcode.substring(3, 5), 16);
  let blue = Number.parseInt(hexcode.substring(5, 7), 16);
  /*  let hexColor = `${red} ${green} ${blue}`; */

  /* const result = {
    red: red,
    green: green,
    blue: blue,
  };
  return result; */

  /* Dette er den nemmeste måde at skrive det andet der er udkommenteret på */
  return { red, green, blue };
}
console.log("color to RGB", HEXtoRGB("#f80ea3"));
console.log("red", HEXtoRGB("#f80ea3").red);
