"use strict";

window.addEventListener("DOMContentLoaded", start);
/* GLOBALE VARIABLER */
let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};
/* setting er nu et object med global variables i */
const settings = {
  filter: "all",
  sortBy: "name",
  sortDir: "asc",
};

let filterBy = "all";

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

/* FILTRERING NB filtering skal ske før soritng  */
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
  /* filterList(filter); */
  setFilter(filter);
}

/* denne function skal kun kalde buildlist og sætte settings.filterBy til filter fordi filter ikke tager højde for rækkefælgen */
function setFilter(filter) {
  settings.filterBy = filter;
  buildList();
}

/* ANIMAL TYPE */
function isCat(animal) {
  return animal.type === "cat";
}

/* vi kan nøjes med at skrive return istedet for at lave if else statement fordi der ikke er flere ting den skal kigge efter*/
function isDog(animal) {
  return animal.type === "dog";
}

/* Filtrer listen så filtreringen bliver vist (displayed) */
function filterList(filteredList) {
  /*  let filteredList = allAnimals; */

  /* KAT */
  if (settings.filterBy === "cat") {
    console.log("det er en kat");
    console.log("click");
    filteredList = allAnimals.filter(isCat);

    /* HUND */
    allAnimals.filter(isCat);
  } else if (settings.filterBy === "dog") {
    filteredList = allAnimals.filter(isDog);
    console.log("det er en hund");
    /*  console.log(allAnimals.filter(isDog)); */
  }
  /* Her kalder vi på displaylist men får den kun til at vælge det der seleced i filteret */
  /* OBS det ville have væreet smart at seperere det fra displayList funktionen så den kan køre selv */
  return filteredList;
}

/* BUILDLIST FOR KOMBINATION AF SROT OG FILTER */

function buildList() {
  /* laver en ny liste der skal filtreres på som er lavet ud fra filterList funktionen */
  const currentList = filterList(allAnimals);
  const sortedList = sortList(currentList);
  /* Den skal stadig display med displayList funktionen, men nu er sort og filter uafhængig af displayList altså ikke kaldt inde i den*/
  displayList(sortedList);
}

/* SORTING */
function selectSort(event) {
  /* dataset.sort kommer fra hvad det hedder i html*/
  const sortBy = event.target.dataset.sort;
  const sortDir = event.target.dataset.sortDirection;

  /* finder den gamle "knap" der er trykket på og fjerner sortBy klassen */
  const oldElement = document.querySelector(`[data-sort=${settings.sortBy}]`);
  oldElement.classList.remove("sortby");

  /* Styling på knapper når de er klikket på (classnames må ikke have uppercase derfor sortby med lille b)*/
  event.target.classList.add("sortby");

  /* Denne if sætning ændre retningen/toggler direction */
  if (sortDir === "asc") {
    event.target.dataset.sortDirection = "desc";
  } else {
    event.target.dataset.sortDirection = "asc";
  }

  console.log(`selected ${sortBy} - ${sortDir}`);
  setSort(sortBy, sortDir);
}

function setSort(sortBy, sortDir) {
  settings.sortBy = sortBy;
  settings.sortDir = sortDir;
  buildList();
}

function sortList(sortedList) {
  console.log(`sorted list er ${sortedList}`);
  /* let sortedList = allAnimals; */
  let direction = 1;
  /* desc for descenting order -altså modat ascending (kommer også fra html dataattribut)*/
  if (settings.sortDir === "desc") {
    direction = -1;
  } else {
    settings.direction = 1;
  }

  sortedList = sortedList.sort(sortByProperty);

  function sortByProperty(animalA, animalB) {
    console.log(`settings.sortBy is ${settings.sortBy}`);
    /* < betyder hvis animalA kommer før animalB */
    if (animalA[settings.sortBy] < animalB[settings.sortBy]) {
      return -1 * direction;
    } else {
      return 1 * direction;
    }
  }
  /* retunere sortedList */
  return sortedList;
}
