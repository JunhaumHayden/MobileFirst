const API_BASE_URL = 'http://localhost:5000/api';

let currentUser = null;

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            password
        });

        currentUser = response.data;

        if (currentUser.tipo === 'profissional') {
            document.getElementById('login-page').classList.add('hidden');
            document.getElementById('professional-page').classList.remove('hidden');
            showSection('home');
            fetchAppointments(currentUser.id);
        } else {
            alert('Acesso restrito a profissionais.');
        }
    } catch (error) {
        console.error('Erro ao autenticar:', error);
        alert('Erro ao autenticar. Tente novamente mais tarde.');
    }
}

async function fetchAppointments(professionalId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/agendamentos/profissional/${professionalId}`);
        const appointments = response.data;

        const appointmentsList = document.getElementById('scheduled-appointments');
        appointmentsList.innerHTML = '';

        appointments.forEach(appointment => {
            const card = document.createElement('div');
            card.classList.add('col-md-4');
            card.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${appointment.servico.nome}</h5>
                        <p class="card-text">Cliente: ${appointment.cliente.nome}</p>
                        <p class="card-text">Data: ${new Date(appointment.dataHora).toLocaleString()}</p>
                    </div>
                </div>
            `;
            appointmentsList.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
        alert('Erro ao buscar agendamentos. Tente novamente mais tarde.');
    }
}

function showSection(sectionId) {
    const sections = ['home', 'update-data', 'new-service', 'reviews'];
    sections.forEach(section => {
        document.getElementById(section).classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('professional-page').classList.add('hidden');
});