const sidebarToggle = () => {
  document.body.classList.toggle("sidebar-open");
};

const sidebarTrigger = document.getElementById("main-header__sidebar-toggle");
sidebarTrigger.addEventListener("click", sidebarToggle);

// Sidebar collapse
const sidebarCollapse = () => {
  document.body.classList.toggle("sidebar-collapse");
};

const sidebarCollapseTrigger = document.getElementById("sidebar__collapse");
sidebarCollapseTrigger.addEventListener("click", sidebarCollapse);

// Theme switcher function
const switchTheme = () => {
  // Get root element and data-theme value
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute("data-theme"),
    newTheme;

  newTheme = dataTheme === "light" ? "dark" : "light";

  // Set the new HTML attribute
  rootElem.setAttribute("data-theme", newTheme);

  // Set the new local storage item
  localStorage.setItem("theme", newTheme);
};

// Add the event listener for the theme switcher
document
  .querySelector("#sidebar__theme-switcher")
  .addEventListener("click", switchTheme);
