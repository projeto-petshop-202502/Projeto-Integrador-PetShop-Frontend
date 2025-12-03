import api from "../api.js";

async function criarAgendamento(e) {
  e.preventDefault();

  const id_pet = document.getElementById("selectPet").value;
  const id_servico = document.getElementById("selectServico").value;
  const id_profissional = document.getElementById("selectProfissional").value || null;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const observacoes = document.getElementById("notes").value;

  const data_hora = `${data} ${hora}`;

  const novoAgendamento = {
    id_pet,
    id_servico,
    data_hora,
    id_profissional,
    observacoes
  };

  try {
    const resposta = await api.post("/agendamento/criar", novoAgendamento);
    alert("Agendamento criado com sucesso!");
    console.log("Resposta da API:", resposta);
    form.reset();
  } catch (erro) {
    console.error("Erro ao criar agendamento:", erro);
    alert("Erro ao criar agendamento. Verifique os dados e tente novamente.");
  }
}

document.getElementById("formAgendamento").addEventListener("submit", criarAgendamento);