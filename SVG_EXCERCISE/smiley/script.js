"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#right-eye").addEventListener("mouseover", onOver);
  document.querySelector("#right-eye").addEventListener("mouseout", onOut);
  /*   document.querySelector("#smile").addEventListener("mouseover", moveOver); */

  /* man kan tilføje det på specifikke numre og på hele arrayet med forEach((g, index, array) fx*/
  document.querySelectorAll("g").forEach((g) => {
    g.addEventListener("mouseover", onOver);
    g.addEventListener("mouseout", onOut);
  });

  function onOver(event) {
    console.log("over target", event.target);
    event.target.classList.add("stroke_animation");
  }

  function onOut(event) {
    console.log("over target", event.target);
    event.target.classList.remove("stroke_animation");
  }

  /*  function moveOver(evt) {
    console.log("over target", evt.target);
    evt.target.classList.add("move");
  } */
}
