"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
  // TODO: Add event-listeners to filter and sort buttons
  addButtons();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  /* map laver et arryet om til et object med vores prepareObject*/
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}
/* DISPLAY */
/* Denne funktion er der filtreret på! dvs når vi skal sortere skal vi huske denne */
function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
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

/* FILTRERING */
function addButtons() {
  document.querySelectorAll("[data-action=filter]").forEach((button) => button.addEventListener("click", selectFilter));

  /* for SORTING */
  document.querySelectorAll("[data-action=sort]").forEach((button) => button.addEventListener("click", selectSort));
}
/* der er tilføjet et event men man behøves ikke skrive eventet */
function selectFilter(event) {
  /* event.target.dataset.filter dette gør at man læser data atributten fra vores html dvs cat, dog og "*" =(for alle)*/
  const filter = event.target.dataset.filter;
  console.log(`selected ${filter}`);
  filterList(filter);
}

/* SORTING */
function selectSort(event) {
  /* dataset.sort kommer fra hvad det hedder i html*/
  const sortBy = event.target.dataset.sort;
  console.log(`selected ${sortBy}`);
  sortList(sortBy);
}

/* function filterknapklik() {
  console.log("click");
  if (this.dataset.filter === "cat") {
    console.log("det er en kat");
    console.log(allAnimals.filter(isCat));

    allAnimals.filter(isCat);
  } else if (this.dataset.filter === "dog") {
    console.log("det er en hund");
    console.log(allAnimals.filter(isDog));

    allAnimals.filter(isDog);
  } else if (all) {
    console.log("alle");
    console.log(allAnimals.filter(all));

    allAnimals.filter(all);
  }
} */

/* ANIMAL TYPE */
function isCat(animal) {
  return animal.type === "cat";
}

/* vi kan nøjes med at skrive return istedet for at lave if else statement fordi der ikke er flere ting den skal kigge efter*/
function isDog(animal) {
  return animal.type === "dog";
}

/* Filtrer listen så filtreringen bliver vist (displayed) */
/* filterBy bliver til en form for global variabel if sætningerne er i samme function */
function filterList(filterBy) {
  /* Viser alle dyr til at starte med */
  let filteredList = allAnimals;

  /* KAT */
  if (filterBy === "cat") {
    filteredList = allAnimals.filter(isCat);
    console.log("det er en kat");
    console.log("click");
    /*  console.log(allAnimals.filter(isCat)); */

    /* HUND */
    allAnimals.filter(isCat);
  } else if (filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
    console.log("det er en hund");
    /*  console.log(allAnimals.filter(isDog)); */
  }
  /* Her kalder vi på displaylist men får den kun til at vælge det der seleced i filteret */
  displayList(filteredList);
}

/* SORTING */
function sortList(sortBy) {
  /* listen der skal have sorting på */
  let sortedList = allAnimals;
  if (sortBy === "name") {
    sortedList = sortedList.sort(sortByName);
  } else if (sortBy === "type") {
    sortedList = sortedList.sort(sortByType);
  }
  /* display sortedList skal kaldes på fordi vi lavede sorting på den */
  displayList(sortedList);
}

function sortByName(animalA, animalB) {
  /* < betyder hvis animalA kommer før animalB */
  if (animalA.name < animalB.name) {
    return -1;
  } else {
    return 1;
  }
}
/* husk at tjekke i inspector sortList() */

function sortByType(animalA, animalB) {
  /* < betyder hvis animalA kommer før animalB */
  if (animalA.type < animalB.type) {
    return -1;
  } else {
    return 1;
  }
}
