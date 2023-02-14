"use strict";
window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

const Students = {
  firstName: "",
  lastName: "",
  middleName: "",
  nickName: "null",
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
  console.log("json loaded");
}

// TODO: Create new object with cleaned data - and store that in the allStudents array
function prepareObjects(jsonData) {
  jsonData.forEach((jasonObject) => {
    /* Laver en Prototype*/

    /* Her laver vi vores nye object */
    const students = Object.create(Students);
    /* Her definere vi variabler så vi ikke skal skrive det hele ud hver gang */
    let fullnameString = jasonObject.fullname;
    /* result er en midlertidig variabel at putte det ind i */
    let result = "";

    /* fordi vi vil starte med at trimme stringen  fordi ???*/
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
    let trimmedString2 = fullnameString;
    let result2 = "";

    /* vi trimmer først stringen */
    result2 = trimmedString2.substring(fullnameString.indexOf(" "), fullnameString.lastIndexOf(" ")).trim();

    /* Her laver vi mellemnavnet med stort bogstav */
    middlename = result2;
    students.middleName = middlename.charAt(0).toUpperCase() + middlename.slice(1).toLowerCase();

    /* nogen af dem har ikke et mellemnavn og det bliver derfor null? */
    if (students.middleName === "" || students.middleName === students.firstName) {
      students.middleName = "";
      /* ?? */
    } else if (students.middleName.includes(`"`)) {
      students.middleName = "";
      /* Denne if sætningen leder efter navne med bindestreg i */
    } else if (students.middleName.includes("-")) {
      /*  Gør at hvis der er bindestreg i et navn laves det også til stort begyndelsesbogstav*/
      students.middleName = middlename.charAt(indexOf("-") + 1).toUpperCase() + middlename.slice(indexOf("-") + 2).toLowerCase();
    }
    /* console.log(students.middleName); */
    //
    //
    //
    //

    /*  EFTERNAVN */
    let trimmedString3 = "";
    let result3 = "";
    /* Nu trimmer vi i slutningen. HUSKER at lave en ny trimmedstrng så det ikke overskriver det andet */
    trimmedString3 = fullnameString.trimEnd();

    /* Her laves efternavnets første bogstav til stort begyndelsesbogstav og resten med små bogstaver */
    result3 = trimmedString3.substring(trimmedString3.lastIndexOf(" ") + 1);
    students.lastName = result3.charAt(0).toUpperCase() + result3.slice(1).toLowerCase();
    /* hvis der er bindestreg i laves dette navn også med stort begyndelsesbogsatv */
    if (students.lastName.includes("-")) {
      students.lastName =
        /* ? */
        result3.substring(0, result3.lastIndexOf("-") + 1) +
        /* finder det første bogstav efter bindestreg og laver det stort bogstav  ??? +2 fordi */
        result3.substring(result3.lastIndexOf("-") + 1, result3.lastIndexOf("-") + 2).toUpperCase() +
        /* laver resten af stringen til små bogstaver */
        result3.substring(result3.lastIndexOf("-") + 2).toLowerCase();
    }
    /*     console.log(students.lastName); */

    /*  NICKNAME */
    /*  Her skal den vise nickname "Ernie" med stort begyndelsesbogstav */
    let result4 = fullnameString.substring(fullnameString.indexOf(`"`), fullnameString.lastIndexOf(`"`) + 1);

    /* ? */
    students.nickName = result4.replaceAll(`"`, ``);
    /*  console.log(students.nickName); */

    /*  IMAGES */
    /* definere hvad det nye element er. Image står med stort fordi det er et Object. 100, 100 er 2 parametre */
    let imgSrc = new Image(100, 100);
    students.image = imgSrc;

    /* laver firstname om til småt og lastname så de stemmer overens med navnene på billederne */
    let lastnameNy = students.lastName.toLowerCase();
    let firstnameNy = students.firstName.charAt(0).toLowerCase();
    /* her finder vi mappen billederne ligger og */
    /* _ referere til billedernes navne */
    imgSrc.src = "./images/" + lastnameNy + "_" + firstnameNy + ".png";

    /* Leanne har ikke noget billede */
    if (lastnameNy === "Leanne") {
      imgSrc.src = "";
      /* efternavnet patil er der to billeder af, så tilføjer det fulde navn for at den kan kende forskel*/
    } else if (lastnameNy.includes("patil")) {
      imgSrc.src = "./images/" + lastnameNy + "_" + students.firstName.toLowerCase() + ".png";
      /* her laves en if sætning der leder efter navnet med bindestreg i (Finch-Fletchy)  */
    } else if (lastnameNy.includes("-")) {
      imgSrc.src = "./images/" + lastnameNy.substring(lastnameNy.indexOf("-") + 1) + "_" + firstnameNy + ".png";
    }
    /* console.log(students.image); */

    /*  HOUSE */
    let housename = jasonObject.house;
    housename = housename.trimStart();
    housename = housename.trimEnd();
    students.house = housename.charAt(0).toUpperCase() + housename.slice(1).toLowerCase();
    console.log(students.house);

    /* TILFØJER DET NYE OBJECT */
    allStudents.push(students);
    console.log(allStudents);
  });

  displayList();
}

function displayList() {
  // fjerner listen
  document.querySelector("#list tbody").innerHTML = "";

  // laver den nye liste
  allStudents.forEach(displayStudent);
}

function displayStudent(students) {
  // laver en klon af den nye liste via templaten
  const clone = document.querySelector("template#student").content.cloneNode(true);

  // bestemmer hvad der skal vises
  clone.querySelector("[data-field=firstName]").textContent = students.firstName;
  clone.querySelector("[data-field=middleName]").textContent = students.middleName;
  clone.querySelector("[data-field=lastName]").textContent = students.lastName;
  clone.querySelector("[data-field=nickName]").textContent = students.nickName;
  clone.querySelector("[data-field=image] img").src = students.image.src;
  clone.querySelector("[data-field=house]").textContent = students.house;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

/* Man kan bruge console.table i  */
