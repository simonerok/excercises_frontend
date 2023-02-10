"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

/* Laver en prototype Animals (altid med stort når det er en prptotyep) */
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const animal = Object.create(Animal);
    /* Her starter vi fra 0 og slutter på det første mellemrum */
    let name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));
    /* Her starter vi fra det sidste mellemrum og slutningen behøves ikke være defineret */

    /* Her finder vi midten af fullname */
    let desc = jsonObject.fullname.substring(jsonObject.fullname.indexOf(" ") + 5, jsonObject.fullname.lastIndexOf(" "));
    console.log(desc);
    let age = jsonObject.age;
    console.log(age);
    // Giver det nye object værdierne som defineret ovenfor!!!
    animal.name = name;
    animal.type = type;
    animal.desc = desc;
    animal.age = age;
    console.log(animal);
    /* Tilføjer det nye object til vore array allAnimals */
    allAnimals.push(animal);
    console.log(allAnimals);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
