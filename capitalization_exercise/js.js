"use strict";

let str = "sofia";

/* */
function capitalization(str) {
  let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return result;
}

console.log(capitalization("soFia"));

/* IMPROVED CAPITALIZATION */
const name = "sof";
const cap = capitalization(name);
console.log(cap);
