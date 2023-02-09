"use strict";

/* FIGUR 1 */
const figur = document.querySelector("#artwork1");
/* den får artwork1 på sig 20 gange */
for (let counter = 100; counter <= 300; counter += 20) {
  console.log(counter);
  /* Laver et div element */
  let artwork1 = document.createElement("div");
  /* tilføjer boksklasse på div elementet*/
  artwork1.classList.add("box");
  /* tilføjer artwork til mit element figur  */
  figur.appendChild(artwork1);
  /* counteren pluses så stylingen får x pixels som følger forloop. dvs for hver gang den kører igennem pluses 20 til px */
  artwork1.style.width = `${counter}px`;
  artwork1.style.height = `${counter}px`;
}

console.log(artwork1);
