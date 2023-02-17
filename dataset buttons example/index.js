"use strict";

document.querySelectorAll(".filter").forEach((each) => {
  each.addEventListener("click", klikFilter);
});
function klikFilter(evt) {
  console.log("klikFilter", evt.target.dataset.filter);
}
