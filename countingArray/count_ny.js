"use strict";
/* arr = vores array */
const arr = [];
/* iterationer = counter som sættes minus 1 for at den starter på 0 og ikke 2 hvis den var 1 */
let iterator = -1;

/* kalder funktionen */
window.addEventListener("DOMContentLoaded", countingLoop);

function countingLoop() {
  iterator++;
  /* splice fjerner et tal så den går op til 9 */
  arr.splice(8);
  /* unshift putter noget ind i starten */
  arr.unshift(iterator);
  /* DELAY på 1 sekund 1000 = millisekunder*/
  setTimeout(countingLoop, 1000);
  console.log(arr);
}
