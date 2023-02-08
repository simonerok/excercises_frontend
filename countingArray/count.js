"use strict";
let counter = 1;
const countingArr = [];

/* FUNTION DER TÆLLER */
function countArray() {
  if (countingArr.length === 0) {
    /* indsætter counter */
    countingArr.push[counter];
    counter++;
  }
  /* FORTÆLLER HVAD DER SKER NÅR DEN HAR TALT TIL 9 */
  if (countingArr.length === 9) {
    /* indsætter counter - 1 som betyder at der trækkes 1 fra så vi ikke når op på 10 */
    countingArr.pop(counter - 1);
    countArray();

    /* DELAY */
    setTimeout(countArray, 1000);

    return;
  }
}

countArray();
console.log(countingArr);
