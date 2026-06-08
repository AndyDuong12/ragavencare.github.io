const roleTabs = Array.from(document.querySelectorAll("[data-role-tab]"));
const rolePanels = Array.from(document.querySelectorAll("[data-role-panel]"));
const menuButton = document.querySelector("[data-menu-button]");
const siteNav = document.querySelector("[data-site-nav]");

function activateRole(role) {
  roleTabs.forEach((tab) => {
    const isActive = tab.dataset.roleTab === role;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  rolePanels.forEach((panel) => {
    const isActive = panel.dataset.rolePanel === role;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

roleTabs.forEach((tab) => {
  tab.addEventListener("click", () => activateRole(tab.dataset.roleTab));
});

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
