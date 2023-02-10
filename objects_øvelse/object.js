"use strict";

/* let object = {
  firstName: "Peter",
  age: 43,
  student: false,
};
console.log(`${object.firstName} is ${object.age}`); */

/* let name = object.firstName;
object.firstName = "bob"; */

/* man kan også skrive det med [] men normalt bruger man dot. notation*/
/* let name = object["firstName"];
object[firstName] = "Bob"; */

/* NY ØVELSE */
/* let person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
}; */
/* console.log(person1.lastName); */
/* person1.lastName = "Tolstrup";
console.log(person1.lastName); */

/* Dette fjerne efternavnet */
/* person1.lastName = undefined;
console.log("person1.lastName", person1.lastName); */

/* har ikke defineret et efternavn derfor har person1 ikke et efternavn */
/* console.log("person1.middleName", person1.middleName); */

/* Her sletter man lastName property så den ikke eksistere i arrayet mere */
/* delete person1.lastName;
console.log("person1.lastName", person1.lastName);
console.log(person1);
 */
/* Her tilføjes + 1 til alderen så der nu står 44 i objectet */
/* person1.age++;
console.log(person1); */

/* Vi laver en ny person med de samme properties som person 1 men kalder hans firstName til at være Bob */
/* const person2 = person1;
person2.firstName = "Bob";
console.log(person1.firstName);

const person2 = {
  firstName: "Bob",
  age: 34,
  student: true,
}; */

/* person1 = person2; */

/* NY ØVELSE */
/* const person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
}; */

/* firstName er Bob  */

/* const person2 = person1;
person2.firstName = "Bob";
console.log(person1.firstName); */

/* Disse er to forskellige objekter */
const person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

const person2 = {
  firstName: "Peter",
  age: 43,
  student: false,
};

/* Her bliver persomNy til person1  */
const personNy = person1;
console.log(personNy);

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = student1;

/* De er de samme */
if (student1 === student2) {
  console.log("they are the same");
} else {
  console.log("they are not the same");
}

const student3 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student4 = {
  firstName: "Harry",
  lastName: "Potter",
};

/* De er ikke de samme */
if (student3 === student4) {
  console.log("they are the same");
} else {
  console.log("they are not the same");
}

/* de er de samme */
student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

if (student1.firstName === student2.firstName) {
  console.log("they are the same");
} else {
  console.log("they are not the same");
}

/* ny opg */
document.addEventListener("DOMContentLoaded", start);

const list = document.querySelector("#list");
const dest = document.querySelector("#list tbody");
const template = document.querySelector("#template#animal");

const HTML = {};

function start() {
  HTML.list = document.querySelector("#list");
  HTML.dest = document.querySelector("#list tbody");
  HTML.template = document.querySelector("#template#animal");
}

/* Ny opg */

/* CSS  */
/* #coffee rgb(192, 255, 238)
 */

/* individuelle variabler */
const rgb = {
  r: 192,
  g: 255,
  b: 238,
};

const hsl = {
  h: 164,
  s: 100,
  l: 88,
};

let hex = "#c0ffee";

/* Nu er det kombineret til et single object */
const color = {
  hex: "c0ffee",
  rgb: { r: 192, g: 255, b: 238 },
  hsl: { h: 164, s: 100, l: 88 },
};
/* hvis vi vil læse den røde farve -så viser consollen at det er 192*/
let red = color.rgb.r;
console.log(`red is: ${red}`);

/* ANIMAL OPGAVE */
/* prototype navne starter med stort bogstav */
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

/* ud fra prototypen kan man lave et reelt object  */
const animal = Object.create(Animal);
/* 
animal.name = name;
animal.type = type;
animal.desc = desc; */

/* Animal.image = "image.jpg";
console.log(animal.image); */
