console.log("hej");
/* Denne regel gør at vi går i "strict mode" som betyder at vi får flere errors så vi nemmere kan finde vores fejl fx hvis en variabel ikke er defineret (num = 17;) så vil der i inspectoren i konsollen stå num is not defined. */
/* Hvordan man tænder for det: skriv "use strict" øverst i dokumentet af js altid*/
("use strict");

num = 17;

/* test af hvilke værdier der er true og false (2, "2", NaN, Infinity, -0, null {} (array), [] (object) - det skrives i const value efter =) */
const value = null;
if (value) {
  console.log("value is truthy");
} else {
  console.log("value is falsy");
}
