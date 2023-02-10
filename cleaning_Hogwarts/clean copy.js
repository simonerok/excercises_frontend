"use strict";
window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

const Students = {
  firstName: "",
  LastName: "",
  middleName: "",
  nickName: "",
  image: "",
  house: "",
};

console.log(Students);
function start() {
  console.log("start");

  loadJSON();
}

/* Henter data fra json fil */
function loadJSON() {
  fetch("jsondata.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

// TODO: Create new object with cleaned data - and store that in the allAnimals array
function prepareObjects(jsonData) {
  jsonData.forEach((jasonObject) => {
    /* Laver en Prototype*/

    /* Her laver vi vores nye object */
    const students = Object.create(Students);
    /* Her definere vi variabler så vi ikke skal skrive det hele ud hver gang */
    let fullnameString = jasonObject.fullname;
    /* result er en midlertidig variabel at putte det ind i */
    let result = "";

    /* fordi vi vil starte med at trimme stringen */
    let trimmedString1 = fullnameString.trimStart();
    result = trimmedString1.substring(0, trimmedString1.indexOf(" "));
    /* Leanne er et særtilfælde hendes navn er kun Leanne */
    if (fullnameString === "Leanne") {
      result = fullnameString;
    }

    /*  FORNAVN */
    /* Dette finder fornavnet og laver det første bogstav til stort bogstav. slice gør at resten ikke bliver stort bogstav + students.firstName sikre at vores data bliver puttet ind i vores nye objekt students*/
    students.firstName = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    /* console.log(students.firstName); */
    //
    //
    //
    /* MELLEMNAVN */
    let middlename = "";
    let trimmedString3 = "";
    let result3 = "";

    result3 = trimmedString3.substring(fullnameString.indexOf(" "), fullnameString.lastIndexOf(" ")).trim();

    /* Her laver vi mellemnavnet med stort bogstav */
    middlename = result3;
    students.middleName = middlename.charAt(0).toUpperCase() + middlename.slice(1).toLowerCase();

    /* nogen af dem har ikke et mellemnavn og der bliver derfor undefined */
    if (students.middleName === "" || students.middleName === students.firstName) {
      students.middleName = "";
    } else if (students.middleName.indexOf(`"`) + students.middleName.lastIndexOf(`"`)) {
      students.middleName = "";
    } else if (students.middleName.includes("-")) {
      /* students.middleName = middlename.substring(0, middlename.indexOf("-")+1) + middlename */
      students.middleName = middlename.charAt(indexOf("-") + 1).toUpperCase() + middlename.slice(indexOf("-") + 2).toLowerCase();
    }
    console.log(students.middleName);
    //
    //
    //
    //

    /*  EFTERNAVN */
    let trimmedString2 = "";
    let result2 = "";
    /* Nu trimmer vi i slutningen. HUSKER at lave en ny trimmedstrng så det ikke overskriver det andet */
    trimmedString2 = fullnameString.trimEnd();

    /* Her laves efternavnets første bogstav til stort begyndelsesbogstav og resten med små bogstaver */
    result2 = trimmedString2.substring(trimmedString2.lastIndexOf(" ") + 1);
    students.lastName = result2.charAt(0).toUpperCase() + result2.slice(1).toLowerCase();
    /* hvis der er bindestreg i laves dette navn også med stort begyndelsesbogsatv */
    if (students.lastName.includes("-")) {
      students.lastName =
        //start by getting first part before -
        result2.substring(0, result2.lastIndexOf("-") + 1) +
        //then get first char after - and ONLY THE FIRST CHAR, make capital
        result2.substring(result2.lastIndexOf("-") + 1, result2.lastIndexOf("-") + 2).toUpperCase() +
        //get rest of lastname in lowercase
        result2.substring(result2.lastIndexOf("-") + 2).toLowerCase();
    }
    console.log(students.lastName);

    /* console.log(studentss.lastName); */

    /*  NICKNAME */
    /*  Her skal den vise nickname "Ernie" med stort begyndelsesbogstav */
    let result4 = fullnameString.substring(fullnameString.indexOf(`"`), fullnameString.lastIndexOf(`"`) + 1);

    students.nickName = result4.replaceAll(`"`, ``);
    console.log(students.nickName);

    /*  IMAGES */

    /*  HOUSE */

    /* TILFØJER DET NYE OBJECT */
    /*  allStudents.push(students);
    console.log(allStudents); */
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allStudents.forEach(displayStudent);
}

function displayStudent(student) {
  // create clone
  const clone = document.querySelector("template#student").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = student.name;
  clone.querySelector("[data-field=desc]").textContent = student.desc;
  clone.querySelector("[data-field=type]").textContent = student.type;
  clone.querySelector("[data-field=age]").textContent = student.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
