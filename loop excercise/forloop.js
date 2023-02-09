"use strict";
/* Her siger vi at counteren skal lægges til så længe counter er mindre end 10 */
for (let counter = 0; counter < 10; counter++) {
  /*  console.log(counter); */
}

/* Her siger vi at counteren skal skal starte på 1, og slutte på 10 */
for (let counter2 = 1; counter2 < 11; counter2++) {
  /*  console.log(counter2); */
}

/* Her starter vi på 10 og trækker 1 fra indtil den rammer 0 hvor den consol.logger "liftoff" */
for (let counter3 = 10; counter3 >= 0; counter3--) {
  /* console.log(counter3); */
  if (counter3 === 0) {
    /* console.log("liftoff"); */
  }
}

/* Denne skal kun tælle "odd numbers" derfor får vi den til kun at tælle hver anden */
for (let counter4 = 1; counter4 < 20; counter4 += 2) {
  /*   console.log(counter4); */
}

/* Denne skal tælle hver anden op til et højt nummer */
for (let counter5 = 1; counter5 < 16777216; counter5 *= 2) {
  /*  console.log(counter5); */
}

/* Dennes anden værdi skal være 114 og tælle hver tredje*/
for (let counter6 = 111; counter6 <= 138; counter6 += 3) {
  /*  console.log(counter6); */
}

/* skal tælle fra 100 ned til 0 i 10 steps af gangen */
for (let counter7 = 100; counter7 >= 0; counter7 -= 10) {
  console.log(counter7);
}
