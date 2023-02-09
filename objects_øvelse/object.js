"use strict";

let object = {
  firstName: "Peter",
  age: 43,
  student: false,
};
console.log(`${object.firstName} is ${object.age}`);

/* let name = object.firstName;
object.firstName = "bob"; */

/* man kan også skrive det med [] men normalt bruger man dot. notation*/
/* let name = object["firstName"];
object[firstName] = "Bob"; */

/* NY ØVELSE */
let person1 = {
  firstName: "Peter",
  age: 43,
  student: false,
};
/* console.log(person1.lastName); */
person1.lastName = "Tolstrup";
console.log(person1.lastName);

/* Dette fjerne efternavnet */
person1.lastName = undefined;
console.log("person1.lastName", person1.lastName);

/* har ikke defineret et efternavn derfor har person1 ikke et efternavn */
console.log("person1.middleName", person1.middleName);

/* Her sletter man lastName property så den ikke eksistere i arrayet mere */
delete person1.lastName;
console.log("person1.lastName", person1.lastName);
console.log(person1);

/* Her tilføjes + 1 til alderen så der nu står 44 i objectet */
person1.age++;
console.log(person1);

/* Vi laver en ny person med de samme properties som person 1 men kalder hans firstName til at være Bob */
const person2 = person1;
person2.firstName = "Bob";
console.log(person1.firstName);
