"use strict";

/* STRING TO RGB */
/* Dette konvertere en tring til seperate numre */
cssTOrgb("rgb(12 , 56,233)");

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

/* RGB TO HEX */

function RGBtoHEX(rVal, gVal, bVal) {
  console.log(rVal, gVal, bVal);
  let rHEX = rVal.toString(16);
  let gHEX = gVal.toString(16);
  let bHEX = bVal.toString(16);
  /* console.log(rHEX, gHEX, bHEX); */
  HEXtoRGB(rHEX, gHEX, bHEX);
}

/* HEX TO RGB */

/* padstart tilføjer et 0 foran hvis det er et single digit -pad metoeden tilføjer indtil man når den ønskede længde dv 2 tal i dette tilfælde og vi har bestemt den skal tilføje et 0 i det "mellemrum" */
function RGBtoHEX(rVal, gVal, bVal) {
  let rHEX = rVal.toString(16).padStart(2, "0");
  let gHEX = gVal.toString(16).padStart(2, "0");
  let bHEX = bVal.toString(16).padStart(2, "0");
  let hexColor = `#${rHEX}${gHEX}${bHEX}`;
  console.log(hexColor);
}
