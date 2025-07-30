function ChecarOLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    console.log("Email digitado:", email);
    console.log("Senha digitada:", senha);

    var UsuarioArmazenado = localStorage.getItem(email);
    console.log("Usuário armazenado no Local Storage:", UsuarioArmazenado);
    
    if (UsuarioArmazenado) {
        var usuario = JSON.parse(UsuarioArmazenado);
        console.log("Dados do usuário encontrado no Local Storage:", usuario);

        if (usuario.senha === senha) {
            alert("Login bem-sucedido!");
            window.location.href = "loja.html";
            return;
        }
    }
    
    alert("Usuário não cadastrado ou senha incorreta. Por favor, verifique os dados ou cadastre-se.");
}

function ChecarOLocalStorage() {
    var email = document.getElementById("email").value;
    var UsuarioArmazenado = localStorage.getItem(email);
    if (UsuarioArmazenado) {
        alert("Você já está cadastrado! Faça login para continuar.");
    }
}