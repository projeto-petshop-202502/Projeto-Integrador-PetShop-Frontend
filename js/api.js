/*const API_BASE_URL = "http://localhost:3000";

function createAuthHeaders() {
    const token = localStorage.getItem("authToken");
    const headers = { "Content-Type": "application/json" };
    
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
}

async function processResponse(response) {
  
    const body = await response.json().catch(() => null);

    if (!response.ok) {

        throw {
            status: response.status,
            message: body?.message || `Erro desconhecido (${response.status})`,
            details: body
        };
    }
    
    return body;
}

async function apiGet(endpoint) {
    const headers = createAuthHeaders();
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, { headers: headers });

    return await processResponse(response);
}


async function apiPost(endpoint, data) {
    const headers = createAuthHeaders();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: headers,
        credentials: 'omit',
        body: JSON.stringify(data)
    });

    return await processResponse(response);
}


async function apiPut(endpoint, data) {
    const headers = createAuthHeaders();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: headers, 
        credentials: 'omit',
        body: JSON.stringify(data),
    });

    return await processResponse(response);
}

async function apiDelete(endpoint, data) {
    const headers = createAuthHeaders();

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: headers,
        credentials: 'omit', 
        body: JSON.stringify(data),
    });

    return await processResponse(response);
}

export { apiGet, apiPost, apiPut, apiDelete };*/


// 1. Cria a instância do Axios com a URL base
const api = axios.create({
  baseURL: "http://localhost:3000",
});

// 2. Interceptor para anexar o token em TODAS as requisições
api.interceptors.request.use(
  (config) => {
    // Corrigido para a chave que você está SALVANDO no login.js
    const token = localStorage.getItem("authToken"); 
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Remove credentials: 'omit' pois o Axios já lida com isso de forma limpa.
    return config;
  },
  (error) => Promise.reject(error)
);

// 3. Exporta a instância para ser usada em qualquer lugar
export default api;