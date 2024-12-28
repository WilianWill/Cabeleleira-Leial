const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");

function changeMenuIcon() {
  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      menuIcon.classList = "fa-solid fa-xmark";
    } else {
      menuIcon.classList = "fa-solid fa-bars";
    }
  });
}

export { changeMenuIcon };
