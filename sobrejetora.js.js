function verificarSobrejetora() {
    var funcao = document.getElementById("funcao").value;
    var intervaloAlvo = document.getElementById("intervalo_alvo").value.split(",").map(Number);
    var resultadoElement = document.getElementById("resultado");

    // Verificar se a função é sobrejetora
    var sobrejetora = eSobrejetora(funcao, intervaloAlvo);

    resultadoElement.innerHTML = "<strong>A função é sobrejetora?</strong><br>";
    resultadoElement.innerHTML += sobrejetora ? "Sim" : "Não";
}

function eSobrejetora(funcao, intervaloAlvo) {
    for (var i = 0; i < intervaloAlvo.length; i++) {
        if (!eval(funcao).includes(intervaloAlvo[i])) {
            return false;
        }
    }
    return true;
}