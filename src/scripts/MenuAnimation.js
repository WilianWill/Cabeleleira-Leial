const links = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");

function menuAnimation() {
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
}

export { menuAnimation };
