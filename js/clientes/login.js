import { apiPost } from "./api.js";

async function loginCliente() {
  const form = document.getElementById("formLogin");
  const formData = new FormData(form);

  const credenciais = {
    email: formData.get("email"),
    senha: formData.get("senha")
  };

  try {
    const resposta = await apiPost("/clientes/login", credenciais);

    localStorage.setItem("userId", resposta.id);
    localStorage.setItem("userTipo", "cliente");

    alert("Login realizado com sucesso!");
    console.log("Resposta da API:", resposta);

    window.location.href = "./dashboard.html";
  } catch (erro) {
    console.error("Erro no login:", erro);
    alert("Email ou senha inválidos. Tente novamente.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      loginCliente();
    });
  }
});