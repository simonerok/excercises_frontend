"use strict";

/* Random RGB */
function randomColor() {
  /* der er 255 tal i rgb */
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return { r, g, b };
}
// console.log(`en random rgb værdi er: ${rgbColor.r} ${rgbColor.g} ${rgbColor.b}`);

/* RGB to css */
function rgbTOcss({ r, g, b }) {
  let rgbval = { r, g, b };
  return `rgb(${rgbval.r}, ${rgbval.g}, ${rgbval.b})`;
}

/* let rgb = { red: 230, green: 200, blue: 100 }; */
let cssColorstring = rgbTOcss(randomColor());
console.log(cssColorstring);

function randomBackground() {
  let cssColor = rgbTOcss(randomColor());
  console.log(cssColor);
  document.body.style.backgroundColor = cssColor;
}
randomBackground();
/* rgb.red, rgb.green, rgb.blue */
