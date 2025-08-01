function enviarParaWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value;

  const numero = "5598988583345"; // <- seu número com DDD e sem símbolos

  const texto = `Olá! Me chamo ${nome}. Tenho interesse em: *${servico}*.

${mensagem ? "Mensagem: " + mensagem : ""}

Poderia me retornar, por favor?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}