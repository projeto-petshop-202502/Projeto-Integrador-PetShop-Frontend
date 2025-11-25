
    function atualizarMenu() {
        const token = localStorage.getItem("token");

        const linkBanhoTosa = document.getElementById("linkBanhoTosa");
        const linkAreaCliente = document.getElementById("linkAreaCliente");
        const linkLogin = document.getElementById("linkLogin");
        const linkLogout = document.getElementById("linkLogout");

        const mobileBanhoTosa = document.getElementById("mobileBanhoTosa");
        const mobileAreaCliente = document.getElementById("mobileAreaCliente");
        const mobileLogin = document.getElementById("mobileLogin");
        const mobileLogout = document.getElementById("mobileLogout");

        if (token) {
            linkBanhoTosa.classList.remove("hidden");
            linkAreaCliente.classList.remove("hidden");
            linkLogout.classList.remove("hidden");
            linkLogin.classList.add("hidden");

            mobileBanhoTosa.classList.remove("hidden");
            mobileAreaCliente.classList.remove("hidden");
            mobileLogout.classList.remove("hidden");
            mobileLogin.classList.add("hidden");

        } else {
            linkBanhoTosa.classList.add("hidden");
            linkAreaCliente.classList.add("hidden");
            linkLogout.classList.add("hidden");
            linkLogin.classList.remove("hidden");

            mobileBanhoTosa.classList.add("hidden");
            mobileAreaCliente.classList.add("hidden");
            mobileLogout.classList.add("hidden");
            mobileLogin.classList.remove("hidden");
        }
    }

    function logout() {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    }

    atualizarMenu();