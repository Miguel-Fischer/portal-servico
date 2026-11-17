# Portal de Serviços | La Bambinela

Portal acadêmico multipágina para a Panificadora La Bambinela. A proposta é reunir em um só lugar as informações que os clientes normalmente precisam buscar por telefone ou mensagem: serviços, encomendas, horários e contato. A consulta de CEP ajuda a conferir o endereço para combinar uma entrega ou retirada.

## Tecnologias

- HTML5 semântico
- CSS3, Grid, Flexbox e media queries
- JavaScript (DOM, eventos, validação, arrays, `forEach`, `filter`, `fetch` e `async/await`)
- LocalStorage
- API pública ViaCEP
- Git e GitHub

## Funcionalidades

- Página inicial com apresentação da panificadora.
- Catálogo de serviços montado dinamicamente a partir de um array de objetos.
- Filtro do catálogo por categoria.
- Consulta orientativa sobre cardápio, encomendas e coffee break.
- Formulário de contato com validação dos campos.
- Preferência de serviço salva no navegador e recuperada ao voltar à página.
- Consulta de endereço por CEP com formatação, estado de carregamento e mensagens para formato inválido, CEP inexistente e falha de conexão.
- Navegação por teclado, rótulos associados aos campos, mensagens acessíveis e layout adaptável a telas pequenas.

> O formulário é uma demonstração front-end: ele valida e confirma a solicitação na página, mas não envia dados para um servidor ou para a padaria.

## API utilizada

A consulta usa o serviço público [ViaCEP](https://viacep.com.br/), que recebe um CEP e retorna dados de endereço em JSON. A integração é feita no navegador com `fetch` e `async/await`. É necessária conexão com a internet para consultar a API.

## Como executar e conferir

1. Abra `index.html` no navegador (ou sirva a pasta com uma extensão/servidor local).
2. Use a navegação para visitar Início, Serviços e Contato.
3. Em Serviços, altere o filtro de categoria e consulte as orientações.
4. Na consulta de CEP, experimente `01001-000`, um valor curto como `123` e um CEP válido inexistente como `00000-000`.
5. Em Contato, envie o formulário preenchido e salve uma preferência; atualize a página para conferir a persistência no mesmo navegador.

## Estrutura

```text
portal-servicos/
├── index.html
├── servicos.html
├── contato.html
├── css/style.css
├── js/script.js
├── js/cep.js
└── js/contato.js
```

## Publicação

Repositório configurado no Git: [Miguel-Fischer/portal-servico](https://github.com/Miguel-Fischer/portal-servico).

Link do GitHub Pages: **pendente de confirmar/configurar em Settings → Pages**. Depois de publicar, substitua esta linha pelo endereço exibido pelo GitHub e abra o link para validar as páginas e a consulta externa.

## Autoria

Projeto acadêmico de Programação Web Front-End. **Completar com o nome do(a) estudante antes da entrega.**

## Panorama Front-End

1. **Componentização:** dividir uma interface em partes menores e reutilizáveis ajuda a organizar o código e manter elementos consistentes.
2. **Multipágina e SPA:** um site multipágina navega entre documentos HTML; uma SPA atualiza as telas principalmente via JavaScript sem recarregar o documento inteiro.
3. **Bootstrap:** biblioteca de CSS e componentes prontos que acelera interfaces responsivas quando se quer usar um sistema visual já estabelecido.
4. **React, Vue e Angular:** ferramentas para criar interfaces com componentes. React é uma biblioteca centrada na interface; Vue é um framework progressivo; Angular oferece uma estrutura mais completa para aplicações.
5. **Fundamentos continuam importantes:** frameworks usam HTML, CSS e JavaScript por baixo, então conhecer esses fundamentos ajuda a entender, adaptar e corrigir a interface.
6. **IA como apoio:** pode sugerir código, explicar erros e acelerar tarefas, mas o desenvolvedor precisa revisar, testar e compreender o que será entregue.
