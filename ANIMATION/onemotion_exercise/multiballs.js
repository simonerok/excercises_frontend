"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";

/* animate(".ball", { y: -400 }, { duration: 2, repeat: Infinity });
animate(".ball", { x: 0 }, { delay: 2, stagger: 2 }); */

/* animate(".ball", { transform: "translateY(calc(-20vw - 21rem))" }, { delay: stagger(0.2), duration: 2, repeat: Infinity, direction: "alternate" }); */

/* another way of writing it, the first{property object}, and the second{is the options object} */
animate(".ball", { y: -400 }, { duration: 2, delay: stagger(0.2), repeat: Infinity, direction: "alternate" });
