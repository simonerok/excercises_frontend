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
  RGBtoHSL(HEXtoRGB(this.value));

  RGBtoCSS();
}

/* Denne function gør at når man vælger en farve bliver det vist */

function RGBtoHSL(rgb) {
  let r = Number.parseFloat(rgb.red);
  let g = Number.parseFloat(rgb.green);
  let b = Number.parseFloat(rgb.blue);

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
  let HSL_color = document.querySelector("#HSL_color");

  HSL_color.textContent = ` HSL: ${h}. ${s}, ${l}`;
}

/* RGB TO CSS */
function cssTOrgb(cssCol) {
  console.log(cssCol.indexOf("("));
  const numberStr = cssCol.substring(cssCol.indexOf("(") + 1, cssCol.indexOf(")"));
  const splitArr = numberStr.split(",");
  console.log("numberStr", numberStr);
  console.log("splitArr", splitArr);
  let r = parseInt(splitArr[0].trim());
  let g = parseInt(splitArr[1].trim());
  let b = parseInt(splitArr[2].trim());
  //   r = r.trim();
  //   r = parseInt(r);
  console.log("r", r);
  console.log("g", g);
  console.log("b", b);
  console.log("r", typeof r);
  RGBtoHEX(r, g, b);
}

/* HEX TO RGB */
function HEXtoRGB(hexcode) {
  /* 16 er talbasen for hexcolor? */
  let red = Number.parseInt(hexcode.substring(1, 3), 16);
  let green = Number.parseInt(hexcode.substring(3, 5), 16);
  let blue = Number.parseInt(hexcode.substring(5, 7), 16);
  /*  let hexColor = `${red} ${green} ${blue}`; */

  /* Dette er den nemmeste måde at skrive det andet der er udkommenteret på */
  return { red, green, blue };
}
console.log("color to RGB", HEXtoRGB("#f80ea3"));
console.log("red", HEXtoRGB("#f80ea3").red);
