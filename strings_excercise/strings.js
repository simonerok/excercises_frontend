"use strict";
/* i javascript kan man ikke bare lave linjeskrift man skal bruge \ -dette gør ikke at den bliver breaket i inspectoren */
const longline =
  "a very veryyyyyyyyyy long line \
of text xxxxxx";
/* det her er back ticks: `` -shift backtics og enter */
const name = "peter";
const drink = "pepsi";
/* line break er det samme i inspector og kan godt bare laves med mellemrum når man laver backticks */
console.log(`Hello ${name}, 
would u like a ${drink} `);

/* ØVELSE */
const animal = "cat";
const animalName = "Mandu";
/* line break er det samme i inspector og kan godt bare laves med mellemrum når man laver backticks */
console.log(`My name is ${name}., 
I have a ${animal} called ${animalName} `);

/* Her kan vi se længden på en string  */
const len = name.length;
console.log(` ${name} is ${len} charactors long`);

const letter = name[0];
console.log(` the first letter of the name is ${letter}  `);

/* for at se hvor langt navnet er totalt med .length */
const newName = "albus percival wulfric brian dumbledore";
const total = newName.length;
console.log(` total number of charactors is ${total}`);

const str1 = "   there is        space here \n ";
const str2 = str1.trim();
console.log(str2);

/* man kan tjekke hvor i navnet man er alt efter hvad man putter ind i () i const */
const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(17);
console.log(`lastname is: _${lastName}_ `);

const sameName = "albus percival wulfric brian dumbledore";
const albus = sameName.substring(5, 0);
const bus = sameName.substring(2, 5);
console.log(`albus is = _${albus}_ `);
console.log(`bus is = _${bus}_ `);
