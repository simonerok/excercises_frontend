"use strict";

window.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("start");
  addEventListeners();
}

function addEventListeners() {
  document.querySelector("#my_color_selector").addEventListener("input", colorChance);
}

/* istedet for event kunne man også bruge this.value */
function colorChance(evt) {
  console.log(this.value);
  showSelectedColor(evt.target.value);
}

/* VIEW FUNCTIONS */

function showSelectedColor(hexValue) {
  /* STYLER BAGGRUNDEN *PT INGEN BAGGRUND */
  document.querySelector("#color_on_display").style.backgroundColor = hexValue;

  /* CONVERTERS */
  const HEXcolor = hexValue;
  const RGBcolor = hexTOrgb(HEXcolor);
  const HSLcolor = RGBtoHSL(RGBcolor.r, RGBcolor.g, RGBcolor.b);

  /* kalder display funktionerne */
  showHEX(HEXcolor);
  showRGB(RGBcolor);
  showHSL(HSLcolor);
}

/* Denne funktion gør at HEX bliver udskrevet med textContent */
function showHEX(color) {
  /* Her laves color til et object ved brug af ${} */
  document.querySelector("#HEX_color").textContent = `HEX: ${color}`;
}

/* RGB vises */
function showRGB(color) {
  document.querySelector("#RGB_color").textContent = `RGB: ${color.r} ${color.g} ${color.b}`;
}

/* HSL vises */
function showHSL(color) {
  document.querySelector("#HSL_color").textContent = `h:: ${Math.round(color.h)}° s: ${Math.round(color.s)}%l: ${Math.round(color.l)}%`;
}

/* CONTROLLER FUNCTION = CONVERTERS */
function hexTOrgb(hexColor) {
  /* 16 er talbasen for hexcolor */
  let r = parseInt(hexColor.substring(1, 3), 16);
  let g = parseInt(hexColor.substring(3, 5), 16);
  let b = parseInt(hexColor.substring(5, 7), 16);

  return { r, g, b };
}

function RGBtoHSL(r, g, b) {
  /*  let r = Number.parseFloat(rgb.red);
  let g = Number.parseFloat(rgb.green);
  let b = Number.parseFloat(rgb.blue); */

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

  return { h, s, l };

  /* let HSL_color = document.querySelector("#HSL_color");
  HSL_color.textContent = ` HSL: ${h}. ${s}, ${l}`; */
}

/* console.log("color to RGB", HEXtoRGB("#f80ea3"));
console.log("red", HEXtoRGB("#f80ea3").red); */
