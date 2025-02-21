// Salva usuário na sessão
function saveSession(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

// Recupera usuário da sessão
function getSession() {
    return JSON.parse(sessionStorage.getItem('user'));
}

// Apaga a sessão (logout)
function logout() {
    sessionStorage.clear();
    window.location.href = "login.html"; // Redireciona para a página de login
}

// Autenticação e redirecionamento
async function authenticate(email, password) {
    try {
        const response = await fetch('http://localhost:5000/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha: password })
        });

        if (!response.ok) {
            throw new Error('Erro ao autenticar');
        }

        const user = await response.json();

        if (user) {
            saveSession(user);
            redirectToDashboard(user);
        } else {
            alert('Email ou senha incorretos');
        }
    } catch (error) {
        console.error('Erro ao autenticar:', error);
        alert('Erro ao autenticar. Tente novamente mais tarde.');
    }
}

// Redireciona usuário para a área correta
function redirectToDashboard(user) {
    if (user.tipo === "profissional") {
        window.location.href = "dashboard-profissional.html";
    } else if (user.tipo === "cliente") {
        window.location.href = "dashboard-cliente.html";
    } else {
        alert("Tipo de usuário inválido");
        logout();
    }
}

// Verifica se há um usuário logado ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const user = getSession();
    if (user) {
        redirectToDashboard(user);
    }
});
