# Consumindo APIs REST com 
## JavaScript: Fetch e Axios

Os Serviços Web no Padrão REST são uma forma comum de comunicação entre sistemas, utilizando o protocolo HTTP para enviar e receber dados. O padrão REST (Representational State Transfer) utiliza métodos HTTP (GET, POST, PUT, DELETE) para criar, ler, atualizar e excluir recursos.
Para consumir essas APIs, podemos utilizar bibliotecas JavaScript como o Fetch API (nativa do JavaScript moderno) e o Axios (uma biblioteca externa que facilita o consumo de APIs).

## O que é REST?
*REST* é um estilo de arquitetura para sistemas distribuídos, que segue os seguintes princípios:
- _Stateless_: Cada requisição é independente e carrega todas as informações necessárias.
- _Cacheable_: As respostas podem ser armazenadas em cache para otimizar a performance.
- _Uniform Interface_: Define uma interface uniforme entre os sistemas, com recursos acessíveis via URLs.
- _Client-Server_: Separação clara entre o cliente (que faz as requisições) e o servidor (que processa as requisições).

### Conceitos Fundamentais
- _Endpoint_: Uma URL que representa um recurso.
- _Métodos HTTP_:
    `GET`: Recupera informações de um recurso.
    `POST`: Cria um novo recurso.
    `PUT`: Atualiza um recurso existente.
    `DELETE`: Remove um recurso.

### Consumindo APIs REST com Fetch
O `Fetch API` é nativo no JavaScript e permite fazer requisições HTTP de forma simples e moderna. Abaixo está um exemplo básico de como usá-lo para consumir uma API REST.
Exemplo de Consumo de API com Fetch
Vamos usar a API pública JSONPlaceholder, que fornece dados fictícios de usuários e posts para testes.

### Código básico para obter dados de usuários:

``` javascript
// Endpoint da API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Fazendo uma requisição GET usando o Fetch
fetch(apiUrl)
  .then(response => {
    // Verificando se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json(); // Convertendo a resposta para JSON
  })
  .then(data => {
    // Exibindo os dados no console
    console.log(data);
  })
  .catch(error => {
    // Tratamento de erros
    console.error('Erro:', error);
  });
```

`fetch(apiUrl)`: Faz a requisição para o endpoint.
`response.json()`: Converte a resposta em formato JSON.
`.then()`: Encadeia as promessas para lidar com a resposta ou erro.
`.catch()`: Captura qualquer erro durante a requisição.

## Exemplo de Envio de Dados (POST) com Fetch
Agora, vamos ver um exemplo de como enviar dados usando o método `POST`.
```javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Dados a serem enviados
const postData = {
  title: 'Meu Novo Post',
  body: 'Este é o conteúdo do meu novo post.',
  userId: 1
};

// fetch sempre retorna um objeto do tipo promise. Esse objeto tem 2 metodos "then" e "catch"
fetch(apiUrl, {
  method: 'POST',  // Método de requisição
  headers: {
    'Content-Type': 'application/json'  // Tipo de conteúdo enviado
  },
  body: JSON.stringify(postData)  // Convertendo o objeto para JSON
})
  .then(response => response.json())  // Convertendo a resposta para JSON uso de arrowfunction '=>' devido a funcao ser utilizada apenas dentro da promise tando no 'response' (nome de um parametro qualquer) quando no 'data'e no 'erro'
  .then(data => {
    console.log('Post criado com sucesso:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
  ```

## Consumindo APIs REST com Axios
O Axios é uma biblioteca JavaScript que facilita as requisições HTTP, além de oferecer funcionalidades como interceptores de requisições, suporte a cancelamento de requisições, e muito mais.
Se for usar em um projeto diretamente no navegador, basta incluir o script CDN do Axios:
```javascript
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### Exemplo de Consumo de API com Axios
Usaremos a mesma API do exemplo anterior, mas agora com o Axios.
```javascript
// Endpoint da API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Fazendo uma requisição GET com Axios
axios.get(apiUrl)
  .then(response => {
    // Exibindo os dados no console
    console.log(response.data);
  })
  .catch(error => {
    // Tratamento de erro
    console.error('Erro:', error);
  });
  ```

### Exemplo de Envio de Dados (POST) com Axios
Agora, o exemplo de envio de dados com POST usando Axios:
```javascript
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Dados a serem enviados
const postData = {
  title: 'Meu Novo Post com Axios',
  body: 'Este é o conteúdo do meu novo post usando Axios.',
  userId: 1
};

axios.post(apiUrl, postData)
  .then(response => {
    console.log('Post criado com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
  ```

## Comparando Fetch e Axios
Característica              Fetch API                                   Axios
Suporte a Promessas         Sim (usando .then() e .catch())             Sim
Sintaxe de Requisição       Mais simples, mas exige conversão para JSON Mais simples, já converte para JSON
Suporte a Cancelamento      Não nativo (precisa de abort controller)    Suporte nativo a cancelamento                Tratamento de Erros         Apenas erros de rede são capturados         Captura erros HTTP automaticamente          Suporte a Interceptores     Não possui                                  Suporta interceptores para requisições e respostas
Tamanho do Pacote           Menor, pois é nativo no navegador           Maior, pois é uma biblioteca externa


## MÃO NA MASSA
Vamos exercitar os conhecimentos aprendidos até aqui.

Para testar nosso código podemos usar um editor online. Uma sugestão é o ambiente de teste do w3scools, mas você pode usar qualquer uma de sua preferência.

### Exercício 1: Requisição GET para a API de Posts
Vamos consumir a API de posts (https://jsonplaceholder.typicode.com/posts) e exibir os títulos dos posts no console. O objetivo é fazer uma requisição GET para pegar a lista de posts e extrair apenas os títulos.
Exemplo com Fetch






```javascript
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário de Post</title>
</head>
<body>
  <h1>Criar Novo Post</h1>
  <form id="postForm">
    <label for="title">Título:</label>
    <input type="text" id="title" name="title" required>
    <br><br>
    <label for="body">Corpo:</label>
    <textarea id="body" name="body" required></textarea>
    <br><br>
    <button type="submit">Enviar</button>
  </form>

  <script src="app.js"></script>
</body>
</html>
```

Usamos fetch(apiUrl) para fazer a requisição. A resposta é transformada em JSON com response.json(). Em seguida, usamos .forEach() para iterar sobre os posts e exibir os títulos.


Exemplo com Axios


Usamos axios.get(apiUrl) para fazer a requisição, e a resposta já vem no formato JSON dentro de response.data. Também usamos .forEach() para iterar e exibir os títulos.




Exercício 2: Criar um formulário simples para enviar dados (POST)
Agora, vamos criar um formulário HTML simples para enviar um título e corpo de um post para a API https://jsonplaceholder.typicode.com/posts. O formulário deve fazer uma requisição POST para criar um novo post.
HTML do Formulário


Criamos um formulário simples com dois campos (title e body) e um botão para enviar os dados.

Código JavaScript (Fetch)


Quando o formulário é enviado, capturamos os dados dos campos, montamos o objeto postData e fazemos uma requisição POST para a API com o Fetch ou Axios.

Código JavaScript (Axios)


A resposta da API contém o objeto post que acabamos de criar, e nós mostramos essa resposta no console e exibimos um alerta de sucesso.

Exercício 3: Requisição DELETE para Excluir um Post
Agora, vamos criar uma requisição para deletar um post usando o método DELETE. O objetivo é fazer uma requisição DELETE para excluir um post da API, passando o ID do post a ser removido.
Exemplo com Fetch


 Ambos têm suporte ao método DELETE. Usamos o fetch() ou axios.delete() para enviar uma requisição que exclui o post com o ID fornecido.

Exemplo com Axios


Como a API jsonplaceholder não altera dados reais, a exclusão não reflete mudanças permanentes, mas o código funciona para fins de teste.

APIs grátis e legais para você consumir
https://medium.com/reactbrasil/10-apis-gr%C3%A1tis-e-legais-para-voc%C3%AA-consumir-69141988ea0b

https://publicapis.dev/category/machine-learning