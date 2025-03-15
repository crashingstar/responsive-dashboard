const sidebarToggle = () => {
  document.body.classList.toggle("sidebar-open");
};

const sidebarTrigger = document.getElementById("main-header__sidebar-toggle");
sidebarTrigger.addEventListener("click", sidebarToggle);
