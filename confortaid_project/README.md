# ComfortAid Project

[WebSite](https://junhaumhayden.github.io/ComfortAid_APP_Project/)

[link](https://junhaumhayden.github.io/publish/)
## Descrição do Projeto

O projeto ComfortAid é uma aplicação móvel desenvolvida para fornecer assistência e conforto aos usuários em diversas situações. A aplicação oferece funcionalidades como monitoramento de saúde, lembretes de medicação, e suporte em emergências.

## Função de Cada Arquivo

- **comfortaid_profissional_show.html**: Arquivo principal da aplicação que inicializa o app e configura as rotas.
- **comfortaid_profissional_env**: Contém as dependências e scripts do projeto.
- **ind0101.html**: Arquivo HTML teste (deveria ter sido o index).
- **/components**: Diretório que contém os componentes reutilizáveis da aplicação.
    - **presentation.html**: Componente de cabeçalho da aplicação.
    - **Footer.js**: Componente de rodapé da aplicação.
- **/assets**: Diretório que contém os componentes reutilizáveis da aplicação e os recursos estáticos como imagens e fontes.
    - **/css**: Arquivos de estilos CSS 
        - **style.css**: Arquivo CSS com os estilos principais da aplicação para a interface do usuário (principalmete os estilos para o header e footer).
    - **/html**: Diretório que contém os componentes reutilizáveis da aplicação.
        - **presentation.html**: Arquivo HTML com a pagina home da aplicaçao. É a primeira página vista pelo usuário.

## Esquema da Árvore de Diretórios

```
/confortaid_project
├── comfortaid_profissional_show.html
├── comfortaid_profissional_env
├── ind0101.html
├── /components
│   ├── Header.js
│   └── Footer.js
├── /assets
│   ├── css
|   ├── html
│   |  └── presentation.html
│   └── js
│      └── script.js
└── /utils
        └── ...
```


/projeto
│
├── index.html          # Página principal
├── assets
│   ├── css
│   │   └── style.css   # Estilos personalizados
│   ├── js
│   │   └── main.js     # Lógica principal da aplicação
│   └── forms           # Pasta para os formulários
│       ├── update-data.html  # Formulário de atualização de dados
│       └── new-service.html  # Formulário de cadastro de novo serviço
│
├── sw.js               # Service Worker (para PWA)
└── manifest.json       # Manifesto PWA




- Adicionar validações de formulário.
- Melhorar a experiência do usuário com feedbacks visuais (ex: loading spinners, mensagens de sucesso/erro).