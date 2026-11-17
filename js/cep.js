// Consulta de endereço pela API pública ViaCEP.
const formularioCep = document.querySelector("#formCep");
const campoCep = document.querySelector("#cep");
const botaoBuscarCep = document.querySelector("#btnBuscarCep");
const statusCep = document.querySelector("#statusCep");
const resultadoCep = document.querySelector("#resultadoCep");

function formatarCep(valor) {
  const numeros = valor.replace(/\D/g, "").slice(0, 8);
  return numeros.length > 5 ? `${numeros.slice(0, 5)}-${numeros.slice(5)}` : numeros;
}

campoCep.addEventListener("input", () => {
  campoCep.value = formatarCep(campoCep.value);
});

async function buscarCep(evento) {
  evento.preventDefault();
  const cep = campoCep.value.replace(/\D/g, "");
  resultadoCep.replaceChildren();

  if (cep.length !== 8) {
    statusCep.textContent = "Digite um CEP válido com 8 números.";
    campoCep.setAttribute("aria-invalid", "true");
    campoCep.focus();
    return;
  }

  campoCep.removeAttribute("aria-invalid");
  statusCep.textContent = "Consultando CEP...";
  botaoBuscarCep.disabled = true;
  botaoBuscarCep.textContent = "Consultando…";

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!resposta.ok) throw new Error(`Resposta HTTP ${resposta.status}`);
    const dados = await resposta.json();

    if (dados.erro) {
      statusCep.textContent = "CEP não encontrado. Confira os números e tente novamente.";
      return;
    }

    statusCep.textContent = "Endereço encontrado.";
    const linhas = [
      ["Logradouro", dados.logradouro],
      ["Bairro", dados.bairro],
      ["Cidade", [dados.localidade, dados.uf].filter(Boolean).join(" / ")],
      ["CEP", dados.cep || formatarCep(cep)]
    ];
    const lista = document.createElement("dl");
    lista.className = "dados-endereco";
    linhas.forEach(([rotulo, valor]) => {
      const titulo = document.createElement("dt");
      titulo.textContent = rotulo;
      const detalhe = document.createElement("dd");
      detalhe.textContent = valor || "Não informado";
      lista.append(titulo, detalhe);
    });
    resultadoCep.appendChild(lista);
  } catch (erro) {
    statusCep.textContent = "Não foi possível consultar agora. Verifique sua conexão e tente novamente.";
    console.error("Erro na consulta ViaCEP:", erro);
  } finally {
    botaoBuscarCep.disabled = false;
    botaoBuscarCep.textContent = "Buscar endereço";
  }
}

formularioCep.addEventListener("submit", buscarCep);
