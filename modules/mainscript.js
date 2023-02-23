"use strict";

import { capitalize, makeSpaces } from "./stringscript.js";

start();

function start() {
  console.log("Start!");

  sayHello("peter");
}

function sayHello(name) {
  const greeting = makeSpaces(`Hello ${capitalize(name)}`);
  document.querySelector("#output").textContent = greeting;
  console.log("greeting", greeting);
}
