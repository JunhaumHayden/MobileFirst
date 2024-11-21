

# Curso Técnico em Desenvolvimento de Sistemas

## Desenvolvimento para Dispositivos Móveis

Prof. Bruno Panerai Velloso  
Prof. Glauco Cardozo

### 

### **Progressive Web App**

PWA, ou *Progressive Web App* (Aplicativo Web Progressivo), é um tipo de aplicação que combina funcionalidades de aplicativos nativos com a acessibilidade e flexibilidade dos sites. PWAs são acessados através de navegadores, mas oferecem uma experiência semelhante a um aplicativo instalado no dispositivo. Isso é possível graças a tecnologias como *service workers*, *web app manifest*, e o uso de HTTPS, que permitem funcionalidades offline, notificações push, atualizações automáticas e acesso rápido.

Os Progressive Web Apps (PWA) são aplicações web desenvolvidas para fornecer recursos aprimorados, confiabilidade e capacidade de instalação, ao mesmo tempo que alcançam **qualquer pessoa, em qualquer lugar, em qualquer dispositivo com uma única base de código**.

### **Principais características de um PWA:**

1. **Responsivo**: Funciona bem em diferentes dispositivos e tamanhos de tela.  
2. **Funciona offline**: Com o uso de *service workers*, PWAs podem armazenar dados no dispositivo, permitindo funcionalidades limitadas mesmo sem internet.  
3. **Instalável**: Pode ser adicionado à tela inicial do dispositivo, como um app nativo.  
4. **Seguro**: Utiliza HTTPS para garantir uma comunicação segura.  
5. **Atualizável**: As atualizações ocorrem automaticamente, garantindo que o usuário sempre acesse a versão mais recente.  
6. **Acesso a recursos do dispositivo**: PWAs podem acessar recursos como câmera, GPS e microfone, permitindo funcionalidades avançadas, como captura de imagens e localização.  
7. **Execução em segundo plano**: PWAs podem realizar tarefas em segundo plano, como sincronizar dados e receber notificações, mesmo quando não estão ativamente sendo usados, garantindo uma experiência mais contínua e engajante para o usuário.

Essas características tornam os PWAs uma solução eficiente, capaz de oferecer uma experiência de uso rica, acessível e integrada aos recursos do dispositivo, sem a necessidade de instalar um aplicativo nativo.

**Jornada do Usuário**

A **jornada do usuário** em um PWA (Progressive Web App) se refere ao caminho que o usuário percorre, desde o momento em que entra em contato com o aplicativo pela primeira vez até o uso contínuo, seja de forma casual ou recorrente. Em PWAs, a jornada do usuário é pensada para oferecer uma experiência fluida, rápida e natural, aproveitando o melhor da web e de aplicativos nativos para satisfazer as expectativas do usuário em diferentes etapas.

### **Etapas da Jornada do Usuário em um PWA:**

1. **Descoberta**: Diferente dos aplicativos tradicionais, que geralmente são encontrados em lojas de apps, um PWA pode ser descoberto de várias formas, como uma simples pesquisa no Google ou um link enviado por mensagem. Como PWAs rodam diretamente no navegador, isso facilita a descoberta, pois o usuário não precisa instalar um app apenas para testá-lo.  
2. **Primeiro Acesso e Experiência Inicial**: Quando o usuário acessa o PWA pela primeira vez, a velocidade e a responsividade são fundamentais. Um PWA deve carregar rapidamente e oferecer uma interface intuitiva para que o usuário tenha uma experiência inicial positiva. A experiência offline e a segurança (com HTTPS) também influenciam nessa fase inicial, garantindo que o usuário tenha confiança no aplicativo.  
3. **Exploração e Engajamento**: Depois do primeiro contato, o PWA deve facilitar a navegação e explorar o uso de funcionalidades específicas, como notificações push e acesso à câmera, para aumentar o engajamento. Essa etapa é essencial para manter o usuário interessado e incentivá-lo a interagir com o aplicativo de maneira mais completa e personalizada.  
4. **Instalação na Tela Inicial**: Muitos PWAs oferecem a opção de instalação na tela inicial do dispositivo, o que elimina a necessidade de instalação pela loja de aplicativos. Quando o usuário opta por isso, o PWA ganha mais visibilidade e fácil acesso, aumentando as chances de o usuário retornar ao app.  
5. **Retorno e Retenção**: Os PWAs utilizam recursos como notificações push e a capacidade de execução em segundo plano para manter o usuário engajado e incentivá-lo a retornar. Essas funcionalidades são cruciais para garantir que o usuário não esqueça do aplicativo e continue a usá-lo.  
6. **Uso Contínuo e Fidelidade**: A partir do uso contínuo, o PWA passa a fazer parte do cotidiano do usuário. Por meio de atualizações automáticas e acesso rápido, ele garante que o usuário sempre tenha uma experiência fluida e sem interrupções. A fidelidade é alcançada quando o usuário confia na praticidade e acessibilidade que o PWA oferece.

   ### **Benefícios da Jornada do Usuário em PWAs:**

* **Simplicidade**: Com menos barreiras (como instalação via loja de apps), o PWA facilita o acesso.  
* **Familiaridade**: A interface pode seguir o padrão de web design familiar ao usuário, mas com melhorias de usabilidade.  
* **Retorno facilitado**: Por estar na tela inicial e enviar notificações, o PWA se mantém presente e acessível.  
* **Integração com o dispositivo**: O uso de recursos nativos melhora a experiência, tornando o aplicativo mais útil.

A jornada do usuário em PWAs, portanto, é pensada para criar um ciclo de descoberta, engajamento, retorno e retenção, com o objetivo de transformar uma experiência simples em uma relação contínua e duradoura com o usuário.

**Instalação**

Para que um PWA possa ser instalado, ele deve atender a alguns critérios técnicos e de experiência de usuário definidos principalmente pelos navegadores modernos. Esses critérios garantem que o PWA ofereça uma experiência de qualidade semelhante à de um aplicativo nativo. Aqui estão os principais requisitos:

### **Critérios Técnicos para Instalação de um PWA:**

1. **HTTPS**: O PWA deve estar hospedado em um servidor seguro, usando HTTPS, para garantir a segurança dos dados e proteger contra ataques de rede. Isso é essencial para que o navegador permita o uso de *service workers*, que são fundamentais para as funcionalidades do PWA.  
2. **Manifesto Web App**: O PWA deve incluir um arquivo JSON chamado *Web App Manifest* (`manifest.json`). Esse arquivo contém informações sobre o aplicativo, como nome, ícone, cor de fundo, orientação de tela e aparência. O manifesto permite que o PWA seja identificado como um aplicativo e fornece os dados necessários para a instalação na tela inicial do dispositivo.  
3. **Service Worker**: Um *service worker* é um script JavaScript que permite o funcionamento offline e o cache de conteúdo. É essencial para garantir que o PWA possa ser acessado sem uma conexão à internet, pelo menos para funcionalidades básicas. O *service worker* também permite a execução de tarefas em segundo plano, como o envio de notificações push.  
4. **Engajamento do Usuário**: Para que o navegador mostre automaticamente o “prompt de instalação” (ou seja, a mensagem que sugere adicionar o PWA à tela inicial), é preciso que o usuário tenha demonstrado algum nível de engajamento. Em muitos navegadores, isso significa que o usuário deve visitar o PWA algumas vezes ou interagir com ele por um certo período. Esse critério ajuda a garantir que o usuário esteja realmente interessado no aplicativo.

Resumidamente:

* O aplicativo ainda não está instalado  
* O usuário deve solicitar a instalação  
* Ser servido por HTTPS  
* Inclui um manifest com:  
  * Nome curto(short\_name) ou Nome Completo(name)  
  * ícones \- deve incluir um ícone de 192x192 px e outro de 512x512 px  
  * URL Inicial(start\_url)  
  * Forma de apresentação(display) \- deve ser fullscreen, standalone ou minimal-ui  
  * prefer\_related\_applications não deve estar presente ou ser falso  
  * Link para o manifest no arquivo html  
* Registra um service worker com método `fetch`  
  * Gerência do cache do aplicativo

**Service Worker**

O **Service Worker** é um tipo especial de script JavaScript que roda em segundo plano, separado da página principal de um site ou PWA (Progressive Web App). Ele é essencial para o funcionamento de várias características que tornam o PWA parecido com um aplicativo nativo, como a capacidade de funcionar offline, receber notificações push e realizar atualizações em segundo plano.

### **Funções e Características Principais do Service Worker em um PWA:**

1. **Cache e Funcionamento Offline**: O service worker permite que o PWA armazene e gerencie recursos como páginas, imagens e arquivos no cache do dispositivo do usuário. Assim, o aplicativo pode ser acessado mesmo sem conexão à internet. Isso cria uma experiência de uso contínua, permitindo que o usuário interaja com o app independentemente de sua conectividade.  
2. **Interceptação de Requisições de Rede**: O service worker intercepta as requisições de rede feitas pelo aplicativo e decide se deve buscar os recursos do cache ou da internet. Isso ajuda a melhorar o desempenho e reduzir o tempo de carregamento, pois recursos frequentemente utilizados podem ser armazenados localmente.  
3. **Notificações Push**: Com o service worker, o PWA pode receber notificações push, mesmo quando o app não está aberto. Essa funcionalidade é útil para enviar lembretes, atualizações, promoções e outras mensagens que incentivem o engajamento do usuário.  
4. **Execução em Segundo Plano**: Por funcionar em segundo plano, o service worker pode executar tarefas e manter o PWA atualizado sem precisar da interação direta do usuário. Ele pode, por exemplo, sincronizar dados ou atualizar o cache com novos conteúdos automaticamente.  
5. **Atualização de Conteúdo**: O service worker permite que o PWA atualize seu conteúdo sem precisar de uma nova instalação ou recarregamento completo. Ele verifica periodicamente se há mudanças nos recursos do aplicativo e atualiza o cache de forma automática, mantendo o PWA sempre com a versão mais recente para o usuário.

### **Ciclo de Vida do Service Worker:**

O service worker possui um ciclo de vida independente da página principal, o que significa que ele continua ativo mesmo após o usuário fechar o PWA. O ciclo de vida inclui etapas como:

* **Instalação**: Quando o PWA é acessado pela primeira vez, o service worker é instalado e pode armazenar os primeiros recursos no cache.  
* **Ativação**: Após a instalação, o service worker passa a monitorar as requisições e gerenciar o cache.  
* **Execução e Atualização**: O service worker entra em ação para gerenciar o cache e as requisições de rede. Ele também pode atualizar automaticamente quando detecta uma nova versão.

### **Importância do Service Worker no PWA:**

O service worker é o principal componente que dá aos PWAs a capacidade de se comportarem como apps nativos, oferecendo uma experiência fluida, rápida e contínua. Ele é o responsável por grande parte da independência do PWA em relação à conectividade e por melhorar a eficiência do aplicativo, criando uma experiência mais satisfatória para o usuário.

## 

* 

| MÃO NA MASSA Vamos exercitar os conhecimentos aprendidos até aqui. |
| :---- |

Verifique o funcionamento do PWA disponível em:

[https://github.com/bpvifsc/template-app-pwa](https://github.com/bpvifsc/template-app-pwa)

Utilize o GOOGLE LIGHTHOUSE para avaliar sua aplicação e a utilize como base para transformar uma SPA em um App instalável. 

Siga os passos descritos no README da aplicação template-app-pwa  
