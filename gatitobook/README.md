# Gatitobook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

______________________________________________________________________
# APLICAÇÃO FRONT-END - Projeto: boas práticas em arquitetura e formulários

## Primeira parte: Home
- Começamos um projeto utilizando o angular/cli como ferramenta de apoio em todo nosso fluxo de trabalho. Utilizando a opção --strict, ligamos mais verificações de tipo no nosso projeto, melhorando logo na largada a nossa qualidade do nosso código.
- Aprendemos como configurar o Bootstrap como framework de CSS global para nossa aplicação.
- Começamos também a estruturar nossa aplicação utilizando o módulo Angular. Com a técnica do lazy loading, melhoramos o carregamento inicial da nossa aplicação.
- Estudamos também como é composto um componente Angular e quais são os arquivos que o angular/cli gera   para nós.
- Começamos a desenvolver nossa primeira funcionalidade: o formulário de Login.

## Segunda parte: Login
- Como interagir com nosso backend utilizando o serviço HttpClient do Angular.
- Como utilizar o mecanismo de Injeção de dependência do Angular para criar nossos próprios serviços e injetá-los nos nossos componentes.
- Vimos também como criar um formulário do tipo Template Driven, em que toda a montagem e a regra de negócio ficam no arquivo de template, e o Angular realiza o controle do modelo de dados utilizando o componente ngModel.
- Criamos um componente de mensagens genérico e aprendemos como receber parâmetros utilizando o @Input e como mostrar conteúdo dinâmico utilizando a interpolação do Angular.
- Por fim, implementamos as validações do nosso formulário HTML utilizando o ngModel para pegar a referência do campo para avaliar se ele está válido ou não.

## Terceira parte: Cadastro de usuário
- Como criar um formulário utilizando a técnica de formulários reativos, em que nós temos um pouco mais de configurações, mas ganhamos mais possibilidades e controle sobre o formulário.
- Estudamos a diretiva routerLink e como o Angular analisa o caminho passado, avaliando primeiro a rota do módulo do componente e depois a rota global.
- Criamos o serviço de cadastro de novo usuário e utilizamos a boa prática de criar uma interface para o retorno do backend e assim termos melhor produtividade e menos erros.

## Quarta subida: validação de formulário assíncrono

- Exploramos o tópico de validações em formulário reativos no Angular. e aprendemos como aplicar validações comuns e padronizadas no nosso componente do nosso formulário, além de usar a classe utilitária Validators, padrão do Angular.
- Criamos uma validação customizada para um campo e vimos quais são os requisitos para uma função ser reconhecida como validação no Angular.
- Também trabalhamos em uma função de validação que avaliava mais do que um campo do nosso formulário.
- Por fim, criamos uma validação que consulta o backend da nossa aplicação e aprendemos sobre os operadores RXJS, uma biblioteca poderosa que o Angular utiliza.

## Última subida: Autenticação

- Começamos a tratar as informações do nosso usuário que o backend nos retorna na forma de um token JWT (Json Web Token).
- Instalamos uma biblioteca que nos ajuda a trabalhar com esse tipo de dado e criamos um serviço exclusivamente para tratar a gravação e recuperação do token.
- Criamos também um serviço que representa as operações com o usuário logado e nesse serviço decodificamos e fazemos o uso do objeto Subject do RXJS para propagar as alterações das informações do usuário.
- Por fim, criamos o cabeçalho e rodapé da nossa interface interagindo com esse serviço de Usuário.

## links interessantes:

https://jwt.io/ - pega o token gerado e transforma ele em um objeto com as informações(não sensíveis) do usuário

______________________________________________________________________
# APLICAÇÃO FRONT-END - Projeto: controle o fluxo de navegação

## primeira subida: Cartão de animais

- Como criar um componente reutilizável, recebendo atributos utilizando o decorator @Input
- Aprendemos a projetar um conteúdo externo no nosso componente utilizando a diretiva ng-content
- Criamos um serviço e enviamos além dos parâmetros, o header da requisição utilizando o objeto HttpHeaders
- Centralizamos a configuração do endereço da API utilizando o arquivo de environment.

## segunda e terceira subida: lista de animais / detalhe do animal

- Como criar uma página utilizando diversos componentes reutilizáveis utilizando a composição.
- Aprendemos a utilizar o operador switchMap para concatenar dois fluxos de informações e não realizar um subscribe dentro de outro subscribe.
- Aprendemos a utilizar guarda de rotas para controlar o fluxo de navegação do usuário em nossa aplicação.
- Como parametrizar a rota da aplicação e utilizar essa informação com o serviço ActivatedRoute
- Aprendemos como anexar o token a todas as requisições ao backend criando um serviço do tipo Interceptor
- Criamos as funções de curtir e excluir e aprendemos mais sobre os operadores mapTo e catchError

## quarta subida: Comentários

- Como carregar informações do servidor enquanto a rota é carregada utilizando o serviço do tipo Resolver
- Criação de componentes de comentários e anexar ele ao componente de detalhe do animal
- Como resetar o formulário após a requisição utilizando o operador tap

## Última subida: novo animal

- Como criar CSS para um componente específico, criando a animação do Menu da aplicação
- Criamos um serviço de upload e aprendemos como enviar uma foto para nosso backend
- Aprendemos a utilizar o HttpClient do Angular para monitorar o progresso da operação de upload.
- Como criar o pacote do nosso projeto de front-end para ser enviado para a produção através do comando ng build.

____________________________________________________________________________________________________________

## Subida para a produção:

- instalação do servidor web node ou http server: dentro da pasta gatitobook, utilizar o comando `npm i -g http-server`;
- Após a execução do comando acima, na mesma pasta utilizar o comando `ng build --configuration=production`;
- Para ver as pastas criadas, basta digitar `ls`, uma pasta nova que foi criada é a "dist", utilize `cd dist`, depois `cd .\gatitobook\`, para entrar nessas pastas, e depois utilize o `http-server`para executar o de produção 

____________________________________________________________________________________________________________

[] Construímos a nossa aplicação Gatito Book criando a lista de animais, a página de detalhe do animal com as opções de curtir, comentar e excluir o animal. Nós também criamos a página de “Novo Animal”, para o nosso usuário poder subir a foto do seu animal na nossa rede social.

[] Começamos a criar a lista de animais utilizando o conceito de componentização para criar componentes reutilizáveis para a nossa página.

[] Utilizamos também a guarda de rota para garantir o fluxo de navegação do nosso usuário e garantir que ele acesse apenas páginas que ele esteja autorizado.

[] Criamos também um interceptor, que serve para manipular toda a requisição ao nosso back-end. Nesse caso, nós criamos o interceptor para anexar o token de autenticação a toda requisição que o nosso front-end faça ao nosso back-end.

[] Depois criamos o formulário de novo animal e aprendemos a fazer o upload de fotos utilizando o HttpClient e o RxJS para fazer essa operação.

[] Por fim, aprendemos a criar o bundle de produção para nós passarmos para a nossa equipe de DevOps, por exemplo, para colocar nossa aplicação front-end na produção.

[] Foi muita informação. Para fixá-la, sugiro que você faça todas as atividades e participe do fórum tanto perguntando como respondendo, pois é compartilhando conhecimento que você vai fixá-lo ao máximo. Obrigado por fazer esse curso e não esqueça de avaliá-lo na plataforma. Até a próxima.
