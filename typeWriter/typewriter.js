"use strict";

/* let stringToType = document.querySelector("#typewriter").innerHTML.trim(); */
let typeWriter = document.querySelector("#typewriter");
let input = typeWriter.textContent;
let maxNumberOfIterations = input.length;
let iterations = -1;
let sound = Math.floor(Math.random() * 2) + 1;

window.addEventListener("DOMContentLoaded", initLoop);

function initLoop() {
  typeWriter.textContent = "";
  loop();
}

function loop() {
  iterations++;
  if (iterations < maxNumberOfIterations) {
    /* input lytter efter om der er mellemrum " " i iterationerne hvorved den så spiller en lyd */
    if (input[iterations] === " ") {
      typeWriter.textContent += `${input[iterations]}`;
      document.querySelector("#typespace").play();
      document.querySelector("#typespace").currentTime = 0;
      setTimeout(sound, 1000);
    } else {
      typeWriter.textContent += `${input[iterations]}`;
      document.querySelector("#typekey" + sound).play();
      document.querySelector("#typekey" + sound).currentTime = 0;
      setTimeout(sound, 1000);
    }
    console.log(input[iterations]);

    setTimeout(loop, 200);
  }
}
