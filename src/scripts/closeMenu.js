const links = document.querySelectorAll("a");
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuIcon.classList = "fa-solid fa-bars";
    });
  });
}

export { closeMenu };
