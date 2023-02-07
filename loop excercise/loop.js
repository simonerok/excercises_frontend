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
