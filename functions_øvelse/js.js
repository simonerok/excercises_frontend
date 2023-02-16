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
/* const result = greeting("peter");
console.log("result", result); */

let sayHi = greeting;
function greeting(firstName) {
  return `Hello ${firstName}`;
}

/* greeting(firstName); */

greeting();

/* parametret er "Class" hvis der ikke skrives noget her, bliver det undefined. Denne bliver nu pointeret til functionen greeting og fungere derfor ligesom den*/
console.log(sayHi("Class"));

/* const txt = `Greeting is ${greeting("Hans")} `;
console.log(txt); */

/* Øvelse lav en person */
/* function createPerson(firstname, lastname, age, gender) {
  return { firstname, lastname, age, gender };
}
let newPerson = createPerson("peter", "tolstrup", 44, "man");
console.log("the person is", newPerson); */

/* CALLBACK FUNCTION */
const person3 = {
  firstname: "Harry",
  lastname: "Potter",
  hired: false,
};

const person4 = {
  firstname: "Ron",
  lastname: "Weasly",
  hired: false,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

hire(person4);
fire(person3);

/* action er et parameter der sætter funktionen i gang (den læser de kaldte funktioner foreOrHire(hire,person) ) */
function fireOrHire(action, person) {
  action(person);
}
/* person 4 er parametret */
fireOrHire(hire, person4);
/* man kan kalde begge functions og med forskellige parametre */
fireOrHire(fire, person3);

console.log(`hired: ${person4.hired}`);
console.log(`hired: ${person3.hired}`);

/* FETCH JASON WITH CALLBACK FUNCTION */
function loadJSON(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => callback(jsonData));
}
loadJSON("https://petlatkea.dk/2021/hogwarts/students.json", start);

/* jsonData er parametren så den ved hvad den skal laode
 */
function start(jsonData) {
  /* console.table er en struktureret måde at vise data på */
  /* console.table(jsonData); */
}

/* Anonomous function */
/* students.forEach(function (student) {
  console.log(`name: ${student.firstName}`);
}); */

/* Higher order functions */
const people = ["Harry", "Ron", "Hermione", "Neville"];

/* person is a param */
function Hello(person) {
  console.log(`Hello ${person}`);
}
/* kalder funktionen for alle personerne i hele arrayet until the end of the array */
people.forEach(Hello);

/* CALLBACK FUNCTION WITH MORE PARAMETERS */
/* a gives the name, b gives index, c gives the full array, d is undefined fordi der ikke er defineret nogen value (og fordi arrayet ikke er længere)  */
function testParams(a, b, c, d) {
  console.log(`a: ${a}, b: ${b} c: ${c}, d: ${d}`);
}
people.forEach(testParams);

/* man kan lave den anonymous ved at skrive: */
/* people.forEach(function (a, b, c, d) {
  console.log(`a: ${a}, b: ${b} c: ${c}, d: ${d}`);
});
 */

/* ARRAY METHODS */
const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leelo", type: "dog" },
  { name: "ScoobyDoo", type: "dog" },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function all(animal) {
  return true;
}

function none(animal) {
  return false;
}

animals.filter(all);
animals.filter(none);
/* retunere alle dyr i arrayet */
console.log("all", animals.filter(all));
/* retunere et tomt array */
console.log("none", animals.filter(none));

/* giver et array kun med kattene */
const onlyCats = animals.filter(isCat);
console.log(onlyCats);

console.log(isCat(animals[2]));
