"use strict";
/* 
let fullname = "sofiasimonerokkedal";

function getNameParts() {
  let firstname = fullname.indexOf(fullname.substring(0, 5));
  console.log(firstname);
}

getNameParts();
console.log(getNameParts());
 */

function functionWithOptions(param1, param2, param3) {
  /* return `${param1} ${param2} ${param3} `; */
  if (param2 === undefined) {
    return `${param3.toLowerCase()} ${param1}`;
    /* det kan enten være undefined eller ikke så man behøves ikke else if */
    return `${param1} ${param2} ${param3} `;
  }
}

let variable = functionWithOptions("fornvn, mellemnavn, efternavn");
console.log("variable:", variable);
