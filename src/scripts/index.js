const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll("a");

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

closeMenuFora();

const elements = document.querySelectorAll(".hidden");

const myObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("show");
    } else {
      item.target.classList.add("hidden");
      item.target.classList.remove("show");
    }
  });
});

elements.forEach((element) => {
  myObserver.observe(element);
});

const nav = document.querySelector(".navigation");
const section = document.querySelectorAll("section");
const navHeight = nav.offsetHeight;
console.log(navHeight);

section.forEach((section) => {
  section.style.paddingTop = navHeight + "px";
});
