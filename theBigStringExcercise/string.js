/* VARIABLER */
let inputField = document.querySelector("#input_field");
let outputField = document.querySelector("#output_field");
let generateBTN = document.querySelector("#generate_btn");
let dropdown = document.querySelector("#options");
let getVal = "";
let getOption = "";

/* OPTIONS */
/* input er en speciel form for eventlistener som gør at hvis der kommer et input så skal den gøre noget */
inputField.addEventListener("input", getInput);
dropdown.addEventListener("input", () => {
  getOption = dropdown.value;
});

/* Læser inputfeltet */
function getInput() {
  getVal = inputField.value;
  console.log(getVal);
}

generateBTN.addEventListener("click", generateOutput(getVal, getOption));

function generateOutput(getVal, getOption) {
  console.log("getVal");
  if (getOption === "1") {
    /* outputField.value = */
    console.log(getVal);
  }
}

/* function getOutput() {
  let getOutput = getVal;
  console.log(getOutput);
}  */
