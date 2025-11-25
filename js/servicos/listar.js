import { apiGet } from "../api.js";

async function listarServicos() {
  try {
    const servicos = await apiGet("/servicos");
    const lista = document.getElementById("listaServicos");
    lista.innerHTML = "";

    servicos.forEach(s => {
      const li = document.createElement("li");
      li.textContent = `${s.nome} - R$ ${s.preco.toFixed(2)}`;
      lista.appendChild(li);
    });
  } catch (err) {
    console.error("Erro ao listar serviços:", err);
    alert("Erro ao carregar serviços.");
  }
}