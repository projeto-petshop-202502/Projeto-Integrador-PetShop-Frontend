const API_BASE_URL = "https://projeto-integrador-petshop-backend.onrender.com";

async function apiGet(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error("Erro na requisição GET");
  return await response.json();
}

async function apiPost(endpoint, data) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro na requisição POST");
  return await response.json();
}

async function apiPut(endpoint, data) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro na requisição PUT");
  return await response.json();
}

async function apiDelete(endpoint, data) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro na requisição DELETE");
  return await response.json();
}

export { apiGet, apiPost, apiPut, apiDelete };
