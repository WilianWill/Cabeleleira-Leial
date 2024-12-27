const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");

/* ONS sobre o projeto:
  -1 ) preciso modularizar as funcoes em arquivos diferentes
  -2 ) preciso organizar melhor as funcoes que acho que estao meio baguncadas
*/

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

    //esse codigo ferifica se a secao esta no meio da tela
    //se estiver ele seta a secao atua --(currentrSection)--  para a secao que esta no meio da tela
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSection = section;
    }

    //se a secao estiver visivel ele adiciona a classe show que tem a animacao
    if (rect.top < window.innerHeight) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });

  links.forEach((link) => {
    //remove a classe activeLink de todos os links
    link.classList.remove("activeLink");

    //se o se o atributo href do link for igual ao id da secao atual ele adiciona a classe activeLink
    if (
      currentSection &&
      link.getAttribute("href") === `#${currentSection.id}`
    ) {
      link.classList.add("activeLink");
    }
  });
};

closeMenuFora();

//funcao de calcular altura da nav, cogitanbdo retirar pois acho que nao preciso mais
//Por enquanto vai ficar ai
const calcularNav = () => {
  const nav = document.querySelector(".navigation");
  const section = document.querySelectorAll("section");
  const navHeight = nav.offsetHeight;

  section.forEach((section) => {
    section.style.paddingTop = navHeight + "px";
  });
};

calcularNav();
document.addEventListener("DOMContentLoaded", () => {
  animarMenu();
  window.addEventListener("scroll", animarMenu);
});

function activeFaq() {
  const faq_title = document.querySelectorAll(".faq_title");

  faq_title.forEach((faq) => {
    faq.addEventListener("click", () => {
      // Verifica se o item clicado já está ativo

      const isActive = faq.classList.contains("active");

      // Remove a classe 'active' de todos os itens
      //loop para remover a classe active de todos os itens da faq

      faq_title.forEach((title) => {
        title.classList.remove("active");
        title.nextElementSibling?.classList.remove("active");
      });

      // Se o item clicado não estava ativo, ativa-o
      if (!isActive) {
        faq.classList.add("active");
        faq.nextElementSibling?.classList.add("active");
      }
    });
  });
}
activeFaq();
