"use strict";

let iterater = 0;
let maxNumberOfIterations;
initLoop();

function initLoop() {
  console.log("initLoop");
  maxNumberOfIterations = 11;
  loop();
}

function loop() {
  console.log("loop", iterater);
  iterater++;
  if (iterater <= maxNumberOfIterations) {
    setTimeout(loop, 200);
  }
}

/* Ny øvelse */
let counter = 0;

/* Manual loop */
if (counter < 10) {
  console.log;
  setTimeout(loop, 400);
}
/* automatic loop */
while (counter < 10) {
  console.log(counter);
  counter++;
}

/* Ny øvelse  */
let counter2;
/* Hvad er forskellen på den forrige og denne????  */
function init2() {
  counter2 = 0;
  loop2();
}

function loop2() {
  console.log(counter2);
  counter2++;
  if (counter2 < 10) {
    loop2();
  }
}
/* ovenstående loop */
console.log(counter2);
/* automatic loop */
console.log(counter);

/* ny øvelse */

/* dette er en alt i en loop */
for (let counter3 = 0; counter3 < 10; counter3++) {
  console.log(counter3);
}
/* counter er undefined dvs det lever ikke udenfor loopet fordi counter er indenfor parantesen*/
/* og fordi increment er kaldt efter counter */
console.log(`after the loop, counter is ${counter3}`);
