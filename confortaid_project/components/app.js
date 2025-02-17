document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");
    const links = document.querySelectorAll(".nav-link");

    // Função para carregar o conteúdo da página dinamicamente
    function loadPage(page) {
        axios.get(`pages/${page}.html`)
            .then(response => {
                contentDiv.innerHTML = response.data;
            })
            .catch(error => {
                contentDiv.innerHTML = `<div class="alert alert-danger">Erro ao carregar a página: ${error}</div>`;
            });

        // Atualiza o estado do menu ativo
        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-page") === page) {
                link.classList.add("active");
            }
        });
    }

    // Adiciona eventos de clique aos links do menu
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
            window.history.pushState({ page }, "", `#${page}`);
        });
    });

    // Trata a navegação do histórico do navegador
    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.page) {
            loadPage(event.state.page);
        }
    });

    // Carrega a página inicial
    const initialPage = window.location.hash.replace("#", "") || "home";
    loadPage(initialPage);
});
