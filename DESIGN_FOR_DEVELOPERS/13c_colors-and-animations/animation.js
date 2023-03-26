import { animate } from "https://cdn.skypack.dev/motion";

/* animation 1 */
animate("body", { opacity: [0, 1] }, { duration: 5 });

/* animation 2 */
animate(".header_graphics", { x: [1000, 0] }, { duration: 2 });
