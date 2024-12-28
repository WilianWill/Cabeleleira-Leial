const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");

function closeMenuOut() {
  document.addEventListener("click", (e) => {
    let linkElement = e.target.closest("a");

    if (linkElement) {
      menu.classList.remove("active");
      menuIcon.classList = "fa-solid fa-bars";
    }

    if (!menu.contains(e.target) && e.target !== menuIcon) {
      menu.classList.remove("active");
    }

    if (menu.classList.contains("active")) {
      menuIcon.classList = "fa-solid fa-xmark";
    } else {
      menuIcon.classList = "fa-solid fa-bars";
    }
  });
}

export { closeMenuOut };
