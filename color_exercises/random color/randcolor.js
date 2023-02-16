"use strict";

/* Random RGB */
function randomColor() {
  /* der er 255 tal i rgb */
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return { r, g, b };
}
let rgbColor = randomColor();
console.log(`en random rgb værdi er: ${rgbColor.r} ${rgbColor.g} ${rgbColor.b}`);

/* RGB to css */
/* function rgbTOcss(r, g, b) {
  let result1 = r.toString(16);
  let result2 = g.toString(16);
  let result3 = b.toString(16);
  return `Dette retunere rgb som string: ${result1} ${result2} ${result3}`;
} */
function rgbTOcss(r, g, b) {
  return `dett retunere rgb som en string: (${r}, ${g}, ${b})`;
}

let rgb = { red: 230, green: 200, blue: 100 };
let cssColorstring = rgbTOcss(rgb.red, rgb.green, rgb.blue);
console.log(cssColorstring);

function randomBackground() {
  let rgb = randomColor();
  let cssColor = rgbTOcss(rgb.red, rgb.green, rgb.blue);
  console.log(cssColor);
  document.body.style.backgroundColor = cssColor;
}
randomBackground();
