"use strict";

import { animate, timeline } from "https://cdn.skypack.dev/motion";

/* x:400 er hvor langt den bevæger sig */
/* der er en defalt duration på 0,3s, hvis man ønsker en anden skal den sættes*/
/*delay er på 2 sekunder */

/* animate(".ball", { x: 400, rotate: 200 }, { duration: 2 }); */
/* man skal lave en anden animation når der skal ske to ting på samme tid */
/* animate(".ball", { scale: 0 }, { delay: 2 }); */

/* konverteret til timelines */
const myTimeline = timeline(
  [
    [".ball", { x: 400, rotate: 200 }],
    [".ball", { scale: 0, transform: "translateX(100vh)", transform: "translateY(-100vw)" }],
  ],
  { duration: 4 }
);
