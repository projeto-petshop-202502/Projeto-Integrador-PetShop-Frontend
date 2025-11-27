import { apiPost } from "../api.js";
/*
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
});*/

import { apiPost } from "../api.js";

async function loginCliente() {
  const form = document.getElementById("formLogin");
  const formData = new FormData(form);

  const credenciais = {
    email: formData.get("email"),
    senha: formData.get("senha")
  };

  try {
    const resposta = await apiPost("/clientes/login", credenciais);

    // Agora salva certinho
    localStorage.setItem("userId", resposta.id);
    localStorage.setItem("userTipo", resposta.tipo); 
    localStorage.setItem("userNome", resposta.nome);

    alert("Login realizado com sucesso!");

    if (resposta.tipo === "cliente") {
      window.location.href = "../pages/areaCliente.html";
    } 
    else if (resposta.tipo === "funcionario") {
      window.location.href = "../pages/areaFuncionario.html";
    }

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
