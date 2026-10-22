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
  mensagemFavorito.textContent = `Favorito salvo: ${servico}`;
});

const favoritoSalvo = localStorage.getItem("servicoFavorito");
if (favoritoSalvo) {
  campoFavorito.value = favoritoSalvo;
  mensagemFavorito.textContent = `Seu serviço favorito é: ${favoritoSalvo}`;
}