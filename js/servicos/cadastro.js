import { apiPost } from "../api.js";

async function cadastrarServico() {
  const form = document.getElementById("formServico");
  const formData = new FormData(form);

  const novoServico = {
    nome: formData.get("nome"),
    descricao: formData.get("descricao"),
    preco: parseFloat(formData.get("preco"))
  };

  try {
    const res = await apiPost("/servicos/cadastro", novoServico);
    alert("Serviço cadastrado com sucesso!");
    form.reset();
  } catch (err) {
    console.error("Erro ao cadastrar serviço:", err);
    alert("Erro ao cadastrar serviço.");
  }
}