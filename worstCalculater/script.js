("strict");
/* GLOBALE VARIABLES */
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const clear = document.querySelector("#clear");
const calc = document.querySelector("#calculate");
let operatorSelect = document.querySelector("#operator");
const checkbox = document.querySelector("#doround");
const decimals = document.querySelector("#decimals");
const resultContainer = document.querySelector("#results");

setUp();
/* SETUP */
function setUp() {
  calc.addEventListener("click", calculate);
  clear.addEventListener("click", clearResults);
}

/* READING THE NUMBERS AND OPERATORS */
operatorSelect.addEventListener("click", readOperator);

/* laver string fra inputfelt om til et nummer. pharseInt er en metode der virker på strings og konvertere dem til tal??*/
firstNumber.addEventListener("input", function () {
  let valAsNumber = parseInt(firstNumber.value);
  console.log(typeof valAsNumber);
});
secondNumber.addEventListener("input", function () {
  let valAsNumber = parseInt(secondNumber.value);
  console.log(typeof valAsNumber);
});

function readOperator() {
  let selectedOperator = operatorSelect.value;
  if (selectedOperator === "add") {
    return "add";
  } else if (selectedOperator === "sub") {
    return "sub";
  } else if (selectedOperator === "mul") {
    return "mul";
  } else if (selectedOperator === "div") {
    return "div";
  } else {
    return "Invalid operator";
  }
}

console.log(readOperator());

/* DO THE CALCULATION */

function calculate() {
  let operator = readOperator();
  let firstVal = parseFloat(firstNumber.value);
  let secondVal = parseFloat(secondNumber.value);
  /* denne variabel kan kun tilgås i denne funktion medmindre den videregives i en anden function (passing parameters) */
  let result;

  if (operator === "add") {
    result = firstVal + secondVal;
  } else if (operator === "sub") {
    result = firstVal - secondVal;
  } else if (operator === "mul") {
    result = firstVal * secondVal;
  } else if (operator === "div") {
    result = firstVal / secondVal;
  } else {
    /* denne skal være der så hvis der af en eller anden grund ikke kan være et resultat hvis man fx skriver # eller andet som den ikke kan regne ud */
    result = "Invalid operator";
    /* WRITING THE RESULT */
    writeResult(result);
    return;
  }

  /* THE ROUNDING */
  if (checkbox.checked) {
    let countDecimals = parseInt(decimals.value);
    /* toFixed retunere det bestemte antal decimaler */
    result = result.toFixed(countDecimals);
    result = parseFloat(result);
    console.log(result);
  } else countDecimals = 0;
  /* WRITING THE RESULT */
  writeResult(result);
}
/* mangler at lade resultatet blive */
function writeResult(result) {
  resultContainer.innerHTML = result;
  console.log(result);
}
/* CLEAR RESULT */
function clearResults() {
  resultContainer.innerHTML = "";
  secondNumber.value = "";
  console.log(clear);
}
