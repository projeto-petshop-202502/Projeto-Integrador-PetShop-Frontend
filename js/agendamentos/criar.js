import { apiPost } from "../api.js";

async function criarAgendamento() {
  const form = document.getElementById("formAgendamento");
  const formData = new FormData(form);

  const id_pet = parseInt(formData.get("id_pet"));
  const id_servico = parseInt(formData.get("id_servico"));
  const data_hora = formData.get("data_hora");
  const id_profissional = formData.get("id_profissional") ? parseInt(formData.get("id_profissional")) : null;
  const observacoes = formData.get("observacoes");

  const novoAgendamento = {
    id_pet,
    id_servico,
    data_hora,
    id_profissional,
    observacoes
  };

  try {
    const resposta = await apiPost("/agendamento/criar", novoAgendamento);
    alert("Agendamento criado com sucesso!");
    console.log("Resposta da API:", resposta);
    form.reset();
  } catch (erro) {
    console.error("Erro ao criar agendamento:", erro);
    alert("Erro ao criar agendamento. Verifique os dados e tente novamente.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAgendamento");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      criarAgendamento();
    });
  }
});