import { animate, timeline } from "https://cdn.skypack.dev/motion";

/* transform er brugt når animationen skal ske samme sted */
/* animate(".box", { transform: "rotate(45deg)" }, { duration: 1, delay: stagger(0.2) }); */

/* med timeline */
const myTimeline = timeline([[".box", { rotate: 45 }, { x: 200 }, { duration: 3 }]]);
/* timeline(myTimeline, options); */
