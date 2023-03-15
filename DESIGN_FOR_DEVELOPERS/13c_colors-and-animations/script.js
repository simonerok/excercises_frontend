/* DARK THEME */

/* CHANGE TO DARK */
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); //set theme to light
};

// Reset the html class to default
const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); //set theme to light
};

let theme = localStorage.getItem("data-theme");
const changeThemeToDark2 = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight2 = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

// Get the element based on ID
const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
