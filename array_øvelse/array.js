"use strict";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
/* Denne viser bogstav e (fordi array starter fra 0) */
let someLetter = letters[4];
console.log(someLetter);
/* viser bogstav h */
let anotherLetter = letters[7];
console.log(someLetter);

/* Denne laver nr 4 om til en stjerne "*" */
let newarr = letters;
newarr[4] = "*";
console.log(newarr);
console.log(letters);

/* NY ØVELSE */
const people = ["Harry", "Ron", "Hermione"];
let result;
/* push tilføjer noget i slutningen */
result = people.push("Draco");
/* pop fjerner noget fra slutningen  */
result = people.pop();
/* tilføjer 2 personer i slutningen */
result = people.push("Neville");
result = people.push("Luna");
/* slice fjerner alt fra 3 position/index */
result = people.slice(0, 3);
/* splice indsætter Cho på 1 plads/index */
result = people.splice(1, 0, "Cho");
/*  Indsætter Ginny på 1. pladsen/index*/
people[1] = "Ginny";
/* push indsætter de to navne i slutningen af arryet */
result = people.push("Fred", "George");
/* indexOf viser hvor Fred befinder sig i arryet  */
result = people.indexOf("Fred");
/* splice laver et nyt array med "Fred" i ??????*/
result = people.splice(result, 1);
console.log(people);
console.log(result);

/* Ny øvelse lav array */
/* Denne laver et array hvor alt er samlet i en */
const str1 = "skdjfsjfpsjfd";
const arr1 = str1.split();
console.log(arr1);

/* Denne splitter bogstaverne op og putter dem på hver deres posiiton */
const str = "skdjfsjfpsjfd";
const arr2 = Array.from(str);
console.log(arr2);
