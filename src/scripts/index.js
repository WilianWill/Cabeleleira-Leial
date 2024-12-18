const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");

const fecharMenu = () => {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuIcon.classList = "fa-solid fa-bars";
    });
  });
};

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menuIcon.classList = "fa-solid fa-xmark";
  } else {
    menuIcon.classList = "fa-solid fa-bars";
  }
});

const closeMenuFora = () => {
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
};
const animarMenu = () => {
  let currentSection = null;

  /* iterando sobre cada secao para colocar as animacoes */
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSection = section;
    }

    if (rect.top < window.innerHeight) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });

  links.forEach((link) => {
    link.classList.remove("activeLink");

    if (
      currentSection &&
      link.getAttribute("href") === `#${currentSection.id}`
    ) {
      link.classList.add("activeLink");
    }
  });
};

closeMenuFora();

const calcularNav = () => {
  const nav = document.querySelector(".navigation");
  const section = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;
  console.log(navHeight);

  section.forEach((section) => {
    section.style.paddingTop = navHeight + "px";
  });
};

calcularNav();
document.addEventListener("DOMContentLoaded", () => {
  animarMenu();
  window.addEventListener("scroll", animarMenu);
});
