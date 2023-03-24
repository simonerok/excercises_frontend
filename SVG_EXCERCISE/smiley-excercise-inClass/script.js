window.addEventListener("DOMContentLoaded", init);

async function init() {
  const smiley = await fetch("broken-smiley.svg");
  const smileyText = await smiley.text();

  document.querySelector("body").innerHTML = smileyText;

  document.querySelectorAll("g").forEach((g) => {
    g.addEventListener("mouseover", onOver);
    g.addEventListener("mouseout", onOut);
  });

  function onOver(event) {
    event.target.classList.add("over");
  }

  function onOut(event) {
    event.target.classList.remove("over");
  }

  document.querySelector("#left-eye").addEventListener("click", (e) => {
    e.target.classList.add("target");
  });
}
