import { apiPost } from "../api.js";

async function loginFuncionario() {
  const form = document.getElementById("formLoginFuncionario");
  const formData = new FormData(form);

  const credenciais = {
    email: formData.get("email"),
    senha: formData.get("senha")
  };

  try {
    const resposta = await apiPost("/funcionarios/login", credenciais);

    localStorage.setItem("userId", resposta.id);
    localStorage.setItem("userTipo", resposta.cargo.toLowerCase());

    alert("Login realizado com sucesso!");
    console.log("Resposta da API:", resposta);

    window.location.href = "./dashboard.html";
  } catch (erro) {
    console.error("Erro no login:", erro);
    alert("Email ou senha inválidos. Tente novamente.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLoginFuncionario");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      loginFuncionario();
    });
  }
});