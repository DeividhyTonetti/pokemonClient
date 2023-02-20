<div align="center">
  <img class="emojidex-emoji" align="center" src="https://cdn.emojidex.com/emoji/seal/pikachu.png" emoji-code="pikachu" alt="pikachu" />
</div>

<h1 align="center">

  [Pokemon Client](https://pokemon-client-blush.vercel.app/)
  </h1>
<p align="center"> Gerenciador de times de Pokémon </p>

<div align="center">
  <img src="https://img.shields.io/static/v1?label=Licence&message=MIT&color=2874F0"/>
  <img src="https://img.shields.io/static/v1?label=Node&message=>14.17&color=00C300"/>
  <img src="https://img.shields.io/static/v1?label=NPM&message=>6.8&color=FF160B"/>
  <img src="https://img.shields.io/static/v1?label=Express&message=>v4.18.8&color=43853D"/>
  <img src="https://img.shields.io/static/v1?label=Prisma&message=v4.10.1&color=FFE005"/>
</div

<!--ts-->
   * [Pré Requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
      * [Clonando o repositório](#clone-repositorio)
      * [Navegando entre diretórios](#navegacao)
      * [Criando variáveis de ambiente](#dotenv)
      * [Instalando as dependências](#dependencias)
    *[Arquitetura](#arquitetura)
   * [Tecnologias](#tecnologias)
   * [Trabalhos Futuros](#trabalhos-futuros)
   * [Observações](#trabalhos-futuros)
<!--te-->

<h4 align="center"> 
	🚧  Pokédex 🚀 Em Fase Final...  🚧
</h4>

# Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) => v2.25.1, 
[Node.js](https://nodejs.org/en/) v16,
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

# Instalação
## Clone este repositório
$ git clone <https://github.com/DeividhyTonetti/pokemonServer.git>

## Navegue até a raiz do projeto via terminal terminal/cmd ou pelo VScode
$ cd (diretórtio...)

## Crie um arquivo chamado .env na raiz do projeto e insira as seguintes variáveis de ambiente:
    VITE_REACT_APP_API_DEVELOPMENT=http://localhost:3000

    VITE_REACT_APP_API_URL_PRODUCTION=https://pokemon-server.vercel.app

    VITE_REACT_APP_POKE_API_URL=https://pokeapi.co/api/v2
 
# Instale as dependências do projeto
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará com Vite
Acesse no seu navegador

# Arquitetura
## Em nossa arquitetura, utilizamos o conceito de separação de responsabilidades, entre componentes de containers e de apresentção

* Os componentes de container são responsáveis por gerenciar o estado e a lógica de negócios da aplicação
* Por outro lado, os componentes de apresentação são responsáveis por renderizar a interface do usuário com base no estado e nos dados fornecidos pelos componentes de container. Eles geralmente não têm lógica de negócios e geralmente são reutilizáveis em diferentes partes da aplicação. Os componentes de apresentação são semelhantes às visões do padrão MVC, que são responsáveis por exibir os dados ao usuário.
* A separação de responsabilidades entre componentes de container e componentes de apresentação é importante para manter o código limpo e fácil de manter. Ao separar a lógica de negócios da interface do usuário, podemos tornar cada componente mais fácil de testar e reutilizar. Além disso, essa separação ajuda a garantir que as alterações feitas em uma parte da aplicação não afetem outras partes.
* Além disso, utilizamos o conceito de funções puras, no qual, toda função possui um valor de entrada, com uma respectiva saída, salvo exceções. Isto, facilita a implementação de futuros testes.

### 🛠 Tecnologias

As seguintes ferramentas e bibliotecas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- [Vercel](https://vercel.com/)

### Trabalhos Futuros (Next Features)
* Incluir a documentação dos componentes através do storybook
* Incluir um search funcional
* Incluir uma pré-visualização das informação dos pokémons
* Incluir um loading infinito
* Incluir tratamento de erros para o usuário
* Melhorar o loading das páginas

### Observações
Este projeto front-end, tem como principal intuito ser simples, e criar uma pokédex. Para ver o funcionamento basta entrar https://pokemon-client-blush.vercel.app/

### Autor
---

<a href="https://www.linkedin.com/in/deividhytonetti6/">
 <img style="border-radius: 50%;" src=https://avatars.githubusercontent.com/u/34030150?s=96&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Deividhy Tonetti</b></sub></a> <a href="https://github.com/DeividhyTonetti" title="Pokédex">🚀</a>


Feito com ❤️ por Deividhy J. Tonetti 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Deividhy-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/deividhytonetti6/)](https://www.linkedin.com/in/deividhytonetti6/) 
[![Hotmail Badge](https://img.shields.io/badge/-deividhytonetti@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:deividhytonetti@gmail.com)](mailto:deividhytonetti@gmail.com)
