import { apiPost } from "../api.js";

async function cadastrarPet() {
  const form = document.getElementById("formPet");
  const formData = new FormData(form);

  const novoPet = {
    nome: formData.get("nome"),
    especie: formData.get("especie"),
    raca: formData.get("raca"),
    idade: parseInt(formData.get("idade")),
    peso: parseFloat(formData.get("peso"))
  };

  try {
    const res = await apiPost("/pets/cadastro", novoPet);
    alert("Pet cadastrado com sucesso!");
    form.reset();
  } catch (err) {
    console.error("Erro ao cadastrar pet:", err);
    alert("Erro ao cadastrar pet.");
  }
}