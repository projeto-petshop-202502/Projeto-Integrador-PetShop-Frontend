import api from "../api.js";

async function carregarProfissionais() {
    try {
        const response = await api.get("/profissionais");
        const profissionais = response.data;

        const lista = document.getElementById("listaProfissional");
        lista.innerHTML = '<option value="">Automático</option>';

        profissionais.forEach(profissional => {
            const option = document.createElement("option");
            option.value = profissional.id_profissional;
            option.textContent = `${profissional.nome} - ${profissional.cargo}`;
            select.appendChild(option);
        });
    } catch (err) {
        console.error("Erro ao carregar profissionais:", err);
        alert("Erro ao carregar Profissionais.");
    }
}
