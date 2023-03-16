/* DARK THEME */
const toggleBtn = document.querySelector(".btn");

const useDark = wondow.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(state) {
  document.documentElement.classList.add("dark-mode", state);
}

toggleDarkMode(useDark.matches);

useDark.addeventListener((event) => toggleDarkMode(event.matches));

GamepadButton.addeventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
});
