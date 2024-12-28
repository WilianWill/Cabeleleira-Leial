const links = document.querySelectorAll("a");
function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuIcon.classList = "fa-solid fa-bars";
    });
  });
}

export { closeMenu };
