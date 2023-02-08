"use strict";
/* arr = vores array */
const arr = [];
/* iterationer = counter som sættes minus 1 for at den starter på 0 og ikke 2 hvis den var 1 */
let iterator = -1;

function initLoop() {
  iterator++;
  /* splice fjerner et tal på samme tid med at den sætter et andet ind */
  arr.splice(8);
  /* unshift putter noget ind i starten */
  arr.unshift(iterator);
  /* DELAY på 1 sekund 1000 = millisekunder*/
  setTimeout(initLoop, 1000);
  console.log(arr);
}

/* kalder funktionen */
initLoop();
