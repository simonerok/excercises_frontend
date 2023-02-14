"use strict";

/* der er 2 parametre */
/* function myFunction (para1, para2)

const firstSpace =fullname.indexOf(" "); */
/* man kan putte en function ind når man har sagt hvad den skal som i dette eksempel */
/* const firstname =fullname.substring(0, firstSpace); */

/* Når den kaldes i en parantes kaldes det at refere til den dvs man kalder den ikke fx */
/* window.addEventListener("DOMContentLoaded", myFunction) */

/* Øvelse */
/* function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
} */
/* Det her er havd der bliver kaldt efter "firstName" */
/* sayHello(firstName, lastName); */

/* if the function is called before it is it does the same */

/* opg 2 der sker ikke noget hvis man ændre variablen inde i funktionen  */

function sayHello(myName) {
  console.log(`Hello ${myName}`);
}

/* opg 2 der sker ikke noget hvis man ændre variablen  */
/* let firstName; */

let firstName = "Sofia";
let lastName = "Rokkedal";

function sayHello(firstName, lastName) {
  /* template literal her kan man ikke bruge komma men istedet skal parametrene konkatineres */
  console.log(`Hello ${firstName + lastName}`);
}
/* Uden et parameter vil den være undefined */
/* rækkefølgen er ikke betydelig hvis de ikke er defineret. Men fordi de er defineret i en let så vil den tage lastname først "Rokkedal" */
sayHello(lastName, firstName);

/* Ny øvelse */
let animalType = "Hamster";
let animalName = "Chorro";

function presentPet() {
  /* Man kan ændre værdien på en global variabel når som helst */
  animalName = "Charles";
  console.log(`My name is ${firstName} i have a ${animalType} called ${animalName}`);
}
/* Dette gør at parametrene tages med når funktionen kaldes */

presentPet(animalType, firstName, animalName);

/* FUNCTIONS AND RETURN VALUES ØVELSER */

/* function myFunc() {
  let vlaue; 
  return value;
}

let result = myFunc(); */

/* Der sker ikke noget når man laver en variabel? */
const result = greeting("peter");
console.log("result", result);

function greeting(firstName) {
  return `Hello ${firstName}`;
}

/* greeting(firstName); */

/* Der sker ikke noget når man ændre parametret her, den siger bare undefined */
greeting("Lau");
/* undefined */
console.log(greeting("Hans"));

const txt = `Greeting is ${greeting("Hans")} `;
console.log(txt);
