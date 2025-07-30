
function UsuarioRegistrar() {
    var tipoConta = document.querySelector('input[name="opcao"]:checked').value;
    var nomeCompleto = document.getElementById("op3").value;
    var cpfCnpj = document.getElementById("op4").value;
    var dataNascimento = document.getElementById("op5").value;
    var celular = document.getElementById("op6").value;
    var email = document.getElementById("op7").value;
    var senha = document.getElementById("op8").value;
    var senha1 = document.getElementById("op9").value;

    console.log("Dados do formulário:");
    console.log("Tipo de conta:", tipoConta);
    console.log("Nome completo:", nomeCompleto);
    console.log("CPF ou CNPJ:", cpfCnpj);
    console.log("Data de nascimento:", dataNascimento);
    console.log("Celular:", celular);
    console.log("E-mail:", email);
    console.log("Senha:", senha);

    if (senha != senha1) {
        alert("As senhas não são iguais.");
    }

    else {
        if(senha.length < 8) {
            alert("A senha deve conter no mínimo 8 caracteres.");
        }
        else {
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/;
    var numeros = /[0-9]/;
    var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    var numMaiusculas = 0;
    var numMinusculas = 0;
    var numNumeros = 0;
    var numEspeciais = 0;

    for(var i = 0; i < senha1.length; i++){
        if(letrasMaiusculas.test(senha1[i])){
            numMaiusculas++;
        }
    }

    for(var i = 0; i < senha1.length; i++){
        if(letrasMinusculas.test(senha1[i])){
            numMinusculas++;
        }
    }

    for(var i = 0; i < senha1.length; i++){
        if(numeros.test(senha1[i])){
            numNumeros++;
        }
    }

    for(var i = 0; i < senha1.length; i++){
        if(caracteresEspeciais.test(senha1[i])){
            numEspeciais++;
        }
    }

    if (numMaiusculas == 0) {
        alert("A senha não possuí letras maíusculas!");
            }
    
     else if (numMinusculas == 0) {
        alert("A senha não possuí letras minúsculas!");
            }
     else if (numNumeros == 0) {
        alert("A senha não possuí números!");
            }
    else if (numEspeciais == 0) {
        alert("A senha não possuí caracteres especiais!");
            }
    else {
        var UsuarioArmazenado = localStorage.getItem(email);
        if (UsuarioArmazenado !== null) {
            console.log("E-mail já cadastrado:", email);
            alert("Este e-mail já está cadastrado. Por favor, faça login ou utilize outro e-mail.");
            return;
        }
    
        var dadosusuario = {
            tipoConta: tipoConta,
            nomeCompleto: nomeCompleto,
            cpfCnpj: cpfCnpj,
            dataNascimento: dataNascimento,
            celular: celular,
            email: email,
            senha: senha,
        };
    
        localStorage.setItem(email, JSON.stringify(dadosusuario));
    
        console.log("Cadastro realizado com sucesso!");
    
        alert("Cadastro realizado com sucesso!");
        Submit();
    }
    }
}

}
