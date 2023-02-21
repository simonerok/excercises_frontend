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
  star: false,
  winner: false,
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

  /* buildlist kaldes så vi kan filtrere og sorte når der er loaded */
  buildList();
  // TODO: This might not be the function we want to call first
  /*  displayList(allAnimals); */
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
  /* TILFØJER STJERNE (husk at tilføje i html, prototype og kalde buildlisti prepObj) */
  if (animal.star === true) {
    clone.querySelector("[data-field=star]").textContent = "⭐";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }
  /* click */
  clone.querySelector("[data-field=star]").addEventListener("click", clickStar);

  function clickStar() {
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    buildList();
  }
  /* TILFØJER WINNER */
  if (animal.winner === true) {
    clone.querySelector("[data-field=winner]").dataset.winner = true;
  } else {
    clone.querySelector("[data-field=winner]").dataset.winner = false;
  }
  /* adder klik til ikonerne */
  clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner);

  function clickWinner() {
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryMakeWinner(animal);
    }
    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

/* REGLER kun 1 af hver type kan være vindere ad gangen og der kan være 2 vindere i alt */
function tryMakeWinner(selectedAnimal) {
  /* list af alle vindere */
  const winners = allAnimals.filter((animal) => animal.winner === true);
  /* for at få antallet af vindere */
  const numberOfWinners = winners.length;
  /* finder den gamle vinder */
  const other = winners.filter((animal) => animal.type === selectedAnimal.type).shift();

  /* hvis der er en anden af samme type der er winner */
  if (other !== undefined) {
    console.log("there can be only one winner of each type");
    /* remove other animal (der kan kun være 1 af hver type)*/
    removeOther(other);
    /* rules 2 vindere ad gangen */
  } else if (numberOfWinners >= 2) {
    console.log("there can only be 2 winners");
    removeAorB(winners[0], winners[1]);
    /* hvis der ikke sker et problem skal den bare lave det valgte dyr til winner */
  } else {
    makeWinner(selectedAnimal);
  }

  function removeOther(other) {
    /* ignore or remove other - her skal vi spørge brugeren om at ignore en eller remove en*/
    document.querySelector("#remove_other").classList.remove("hide");
    document.querySelector("#remove_other .closebtn").addEventListener("click", closeDialog);
    /* hvis ignoreret skal der ikke ske noget */

    document.querySelector("#remove_other #remove_other_btn").addEventListener("click", clickRemoveOther);
    document.querySelector("#remove_other .closebtn").removeaddEventListener("click", closeDialog);

    function closeDialog() {
      document.querySelector("#remove_other").classList.add("hide");
    }

    /* if remove other */
    /*  removeWinner(other);
    makeWinner(selectedAnimal); */
  }

  function removeAorB(winnerA, winnerB) {
    /* spørg brugeren om at ignorere. Eller remove A eller B */

    /* if ignore -sker der ingenting */

    /* if remove A */
    removeWinner(winnerA);
    makeWinner(selectedAnimal);

    /* if remove B */
    removeWinner(winnerB);
    makeWinner(selectedAnimal);
  }

  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }

  function makeWinner(animal) {
    animal.winner = true;
  }
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
