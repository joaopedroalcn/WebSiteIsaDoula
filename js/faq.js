// FAQ interativo para abrir/fechar respostas

document.addEventListener('DOMContentLoaded', function () {
  const perguntas = document.querySelectorAll('.faq-pergunta');
  perguntas.forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      item.classList.toggle('open');
    });
  });
});
