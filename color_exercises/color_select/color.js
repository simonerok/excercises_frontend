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
  let HEX_color = document.querySelector("#HEX_color");
  HEX_color.textContent = this.value;
  HEXtoRGB(this.value);
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

/* STRING TO RGB */

cssTOrgb("rgb(12 , 56,233)");

function cssTOrgb(cssCol) {
  console.log(cssCol.indexOf("("));
  const numberStr = cssCol.substring(cssCol.indexOf("(") + 1, cssCol.indexOf(")"));
  const splitArr = numberStr.split(",");
  console.log("numberStr", numberStr);
  console.log("splitArr", splitArr);
  /* vi splitter talene ad og trimmer dem. parseInt bruges til at give et helt tal uden decimaler og konvertere til en string?*/
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

/* RGB TO HEX */
function RGBtoHEX(rVal, gVal, bVal) {
  console.log(rVal, gVal, bVal);
  /* 16 er talbasen for hexcolor */
  let rHEX = rVal.toString(16);
  let gHEX = gVal.toString(16);
  let bHEX = bVal.toString(16);
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
