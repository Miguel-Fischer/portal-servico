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

// Aula 09 e 11 - array de serviços do Portal, agora com categoria
const servicos = [
  {
    nome: "Cardápio",
    descricao: "Consulte pães, doces e salgados disponíveis antes de fazer seu pedido.",
    categoria: "produtos"
  },
  {
    nome: "Encomendas",
    descricao: "Encomende bolos, salgados e pães especiais com antecedência e retire no horário combinado.",
    categoria: "produtos"
  },
  {
    nome: "Coffee break",
    descricao: "Solicite um orçamento personalizado de coffee break para eventos, reuniões e festas.",
    categoria: "eventos"
  },
  {
    nome: "Acompanhamento de pedidos",
    descricao: "Saiba o status e o prazo de entrega da sua encomenda.",
    categoria: "atendimento"
  },
  {
    nome: "Horários e localização",
    descricao: "Segunda a sábado, das 6h às 19h. Domingo, das 6h às 12h. Rua das Palmeiras, 245, centro.",
    categoria: "atendimento"
  }
];

// Aula 10 e 11 - monta os cards dinamicamente no DOM, recebendo a lista por parâmetro
const listaServicos = document.querySelector("#listaServicos");

function renderizarServicos(lista) {
  listaServicos.innerHTML = "";

  if (lista.length === 0) {
    listaServicos.textContent = "Nenhum serviço foi encontrado nesta categoria.";
    return;
  }

  lista.forEach((servico) => {
    const card = document.createElement("article");
    card.classList.add("card-servico");

    const titulo = document.createElement("h3");
    titulo.textContent = servico.nome;

    const descricao = document.createElement("p");
    descricao.textContent = servico.descricao;

    card.append(titulo, descricao);
    listaServicos.appendChild(card);
  });
}

renderizarServicos(servicos);

// Aula 11 - filtro por categoria
const filtroCategoria = document.querySelector("#filtroCategoria");
const mensagemFiltro = document.querySelector("#mensagemFiltro");

filtroCategoria.addEventListener("change", () => {
  const categoriaEscolhida = filtroCategoria.value;

  if (categoriaEscolhida === "todos") {
    renderizarServicos(servicos);
    mensagemFiltro.textContent = "Mostrando todos os serviços.";
  } else {
    const servicosFiltrados = servicos.filter((servico) => {
      return servico.categoria === categoriaEscolhida;
    });
    renderizarServicos(servicosFiltrados);
    mensagemFiltro.textContent = servicosFiltrados.length + " serviço(s) encontrado(s).";
  }
});