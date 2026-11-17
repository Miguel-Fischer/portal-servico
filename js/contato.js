// Aula 12 - validação do formulário de contato
const formulario = document.querySelector("#formContato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const mensagemForm = document.querySelector("#mensagemForm");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value;
  const texto = campoMensagem.value.trim();

  if (nome === "" || email === "" || assunto === "" || texto === "") {
    mensagemForm.textContent = "Preencha os campos obrigatórios antes de continuar.";
    return;
  }

  mensagemForm.textContent = `Obrigado, ${nome}! Sua solicitação foi registrada.`;
});

// Aula 13 - preferência salva no LocalStorage
const campoFavorito = document.querySelector("#servicoFavorito");
const botaoFavorito = document.querySelector("#btnSalvarFavorito");
const mensagemFavorito = document.querySelector("#favoritoSalvo");

botaoFavorito.addEventListener("click", () => {
  const servico = campoFavorito.value;

  if (servico === "") {
    mensagemFavorito.textContent = "Escolha um serviço primeiro.";
    return;
  }

  localStorage.setItem("servicoFavorito", servico);
  const nomeServico = campoFavorito.options[campoFavorito.selectedIndex].text;
  mensagemFavorito.textContent = `Favorito salvo: ${nomeServico}.`;
});

try {
  const favoritoSalvo = localStorage.getItem("servicoFavorito");
  if (favoritoSalvo && campoFavorito.querySelector(`option[value="${favoritoSalvo}"]`)) {
    campoFavorito.value = favoritoSalvo;
    mensagemFavorito.textContent = `Seu serviço favorito é: ${campoFavorito.options[campoFavorito.selectedIndex].text}.`;
  }
} catch (erro) {
  mensagemFavorito.textContent = "O armazenamento de preferências não está disponível neste navegador.";
  console.error("Não foi possível ler a preferência:", erro);
}
