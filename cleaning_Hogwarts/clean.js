window.addEventListener("DOMContentLoaded", start);

const allStudents = [];

/* Laver en Prototype*/
const Students = {
  firstName: "",
  LastName: "",
  middleName: "unknown",
  nickName: "unknown",
  image: "image.jpg",
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

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const students = Object.create(Students);
    /* firstname skal også laves stort bogstav */
    let firstName = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" ") + charAt(0).toUpperCase() + jsonObject.fullname.slice(1).toLowerCase());
    console.log(firstName);
    /* lastname */
    let lastName = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" "));
    /* middleName */
    let middleName = jsonObject.fullname.substring(jsonObject.fullname.indexOf(" "), jsonObject.fullname.lastIndexOf(" "));
    /* nickName hvis de har et */
    let nickName = jsonObject.fullname.substring(0, jsonObject.fullname.includes());
    /* image   */
    let image = jsonObject.fullname.endsWith(".jpg");
    /* let gender = jsonObject.gender; */
    let house = jsonObject.house;
    /*  console.log(house);
     */
    /*   student.firstName = firstName;
    student.lastName = lastName;
    student.middleName = middleName;
    student.nickName = nickName;
    student.image = image;
    student.house = house;

    console.log(student); */

    /* Tilføjer det nye object */
    /* allStudents.push(student);
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
