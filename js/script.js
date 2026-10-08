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

// Aula 09 - array de serviços do Portal
const servicos = [
  {
    nome: "Cardápio",
    descricao: "Consulte pães, doces e salgados disponíveis antes de fazer seu pedido."
  },
  {
    nome: "Encomendas",
    descricao: "Encomende bolos, salgados e pães especiais com antecedência e retire no horário combinado."
  },
  {
    nome: "Coffee break",
    descricao: "Solicite um orçamento personalizado de coffee break para eventos, reuniões e festas."
  },
  {
    nome: "Acompanhamento de pedidos",
    descricao: "Saiba o status e o prazo de entrega da sua encomenda."
  },
  {
    nome: "Horários e localização",
    descricao: "Segunda a sábado, das 6h às 19h. Domingo, das 6h às 12h. Rua das Palmeiras, 245, centro."
  }
];

// Teste temporário (Passo 3 e 4) - pode apagar depois de conferir no Console
console.table(servicos);
console.log(servicos[0].nome);
console.log(servicos[1].descricao);

servicos.forEach((servico) => {
  console.log(servico.nome);
});