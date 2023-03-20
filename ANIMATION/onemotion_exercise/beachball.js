"use strict";

import { animate } from "https://cdn.skypack.dev/motion";

/* x:400 er hvor langt den bevæger sig */
/* duration er tiden: 2 sekunder */
animate(".ball", { x: 400, rotate: "200deg" }, { duration: 2 });
