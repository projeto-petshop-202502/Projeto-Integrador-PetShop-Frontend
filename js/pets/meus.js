import { apiGet } from "../api.js";

async function listarMeusPets() {
  try {
    const pets = await apiGet("/pets/meus");
    const lista = document.getElementById("listaPets");
    lista.innerHTML = "";

    pets.forEach(pet => {
      const li = document.createElement("li");
      li.textContent = `${pet.nome} (${pet.raca})`;
      lista.appendChild(li);
    });
  } catch (err) {
    console.error("Erro ao listar pets:", err);
    alert("Erro ao carregar seus pets.");
  }
}