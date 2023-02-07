/* Gør at vi kan se mere specifikke fejl */
"use strict";
/* GLOBALE VARIABLER */
let inputString = document.querySelector("#input_field");
let outputString = document.querySelector("#output_field");
let btn = document.querySelector("#btn");
let dropdown = document.querySelector("#options");
let str = "";
let option = "";
let letter;
let result = "";

/* INPUT AND DROPDOWN EVENTLISTENERS */
inputString.addEventListener("input", getInput);
dropdown.addEventListener("input", () => {
  option = dropdown.value;
  console.log(option);
});

/* READS THE INPUT */
function getInput() {
  str = inputString.value;
  console.log(str);
}

/* EVENTLISTENER ON BUTTON */
btn.addEventListener("click", () => {
  console.log("klik på knap");
  generateOutput(str, option);
});

/* FUNKTION WITH THE DIFFERENT OPTIONS FROM DROPDWON MENU */
function generateOutput(str, option) {
  console.log("hej");
  if (option === "1") {
    /* charAt bruges til at vælge det første bogstav, toUpperCase gør det stort bogstav. slice(1) bruges til at vælge alt undtagen det første bogstav og gøre det små bogstaver */
    outputString.value = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  } else if (option === "2") {
    /* Den skal finde det første navn af et fuldt navn
    substring lader os vælge alt der starter fra 0 som er starten, indtil det første mellemrum med "indexOf (" ")" */
    outputString.value = str.substring(0, str.indexOf(" "));
  } else if (option === "3") {
    /* Denne skal finde længden af stringen
    .lenght giver længden af en string */
    outputString.value = str.length;
  } else if (option === "4") {
    /* Denne skal finde midten af inputtet indeOf kigger på starten indtil mellemrum er fundet og lastIndexof tager slytningen indtil mellemrum*/
    outputString.value = str.substring(str.indexOf(" "), str.lastIndexOf(" "));
  } else if (option === "5") {
    /* Denne skal checke efter jpg eller png 
    includes tjekker om substring i dette tilfælde "jpg og png" er i den hele string */
    if (str.includes(".jpg")) {
      outputString.value = ".jpg";
    } else if (str.includes(".png")) {
      outputString.value = ".png";
    }
  } else if (option === "6") {
    /* Denne skal gemme bogstaverne med det korekte antal *´er
    "*" er en string som vi gentager på vores str´s længde med .length */
    outputString.value = "*".repeat(str.length);
  } else if (option === "7") {
    /* Denne skal lave det 3. bogstav med stort bogstav */
    outputString.value = str.substring(0, 2) + str[2].toUpperCase() + str.slice(3).toLowerCase();
  } else if (option === "8") {
    console.log("HALLO! inputString", str);
    Array.from(str).forEach((letter, i) => {
      if (str[i - 1] === " " || str[i - 1] === "-") {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    });
    outputString.value = result;
    console.log(result);
  }
}
