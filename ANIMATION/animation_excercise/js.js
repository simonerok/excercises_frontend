import { animate, stagger } from "https://cdn.skypack.dev/motion";

/* transform er brugt når animationen skal ske samme sted */
animate(".box", { transform: "rotate(45deg)" }, { duration: 1, delay: stagger(0.2) });
