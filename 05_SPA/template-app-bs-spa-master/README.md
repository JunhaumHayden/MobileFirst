# Modelo para APP baseado em Bootstrap com uso de SPA

Madelo com base no projeto: https://github.com/bpvifsc/template-app-basico

Disponível em: https://bpvifsc.github.io/template-app-bs-spa/

## Convertido para SPA com os seguintes passos:

1. remover o ```iframe``` de index.html
2. mover as tags ```section``` e seus conteúdos dos arquivos html para dentro da tag ```main``` do arquivo index.html
3. definir um ```id``` para cada tag section do arquivo index.html
    Ex.: conteúdo do arqvivo home.html colocado na tag ```<section id='home' ...```
4. adicionar a classe ```collapse``` em cada tag ```section``` com execeção do conteúdo que é apresentado inicialmente
5. modificar o código do arquivo main.js para o seguinte
  ```
    var pgAtual = "#home";
    function mostraPagina(pg) {
        $(pgAtual).hide();
        $(pg).show();
        pgAtual = pg;
    }
  ```
6. modificar as chamadas da função ```mostraPagina``` para o ```id```(com o #) definido nas tags ```section```
Ex.: ```onclick="mostraPagina('#equipe')"```





