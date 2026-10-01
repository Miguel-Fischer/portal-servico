const campoServico = document.querySelector("#servico");
const botaoConsultar = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");

botaoConsultar.addEventListener("click", () => {
  const escolha = campoServico.value;

  if (escolha === "") {
    resultado.textContent = "Escolha um serviço antes de consultar.";
  } else if (escolha === "cardapio") {
    resultado.textContent = "Confira nosso cardápio completo na página de Serviços ou peça pelo WhatsApp.";
  } else if (escolha === "encomenda") {
    resultado.textContent = "Encomendas devem ser feitas com pelo menos 24h de antecedência pelo formulário de Contato.";
  } else if (escolha === "coffee-break") {
    resultado.textContent = "Solicite seu orçamento de coffee break informando data, número de pessoas e local do evento.";
  } else {
    resultado.textContent = "Serviço não identificado.";
  }
});