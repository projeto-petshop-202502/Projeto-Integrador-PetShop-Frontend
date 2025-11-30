import api from "./api.js";

async function loginCliente() {
  const form = document.getElementById("formLogin");
  const formData = new FormData(form);

  const credenciais = {
    email: formData.get("email"),
    senha: formData.get("senha")
  };
  console.log("Credenciais sendo enviadas:", credenciais);
  try {
    const resposta = await api.post("/clientes/login", credenciais);

    console.log("Resposta da API (Token):", resposta.data.token);
    localStorage.setItem("authToken", resposta.data.token);
    localStorage.setItem("userId", resposta.data.id);
    localStorage.setItem("userTipo", "cliente");
    const tokenSalvo = localStorage.getItem("authToken"); 
    console.log("Token salvo no LocalStorage:", tokenSalvo);


    alert("Login realizado com sucesso!");
    console.log("Resposta da API:", resposta);

    window.location.href = "../pages/areaCliente.html";
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