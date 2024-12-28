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

export { activeFaq };
