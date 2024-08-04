function verificarConjuntos() {
    var numero = parseFloat(document.getElementById("numero").value);
    var resultadoElement = document.getElementById("resultado");

    var conjuntoDiscreto = verificarConjuntoDiscreto(numero);
    var conjuntoContinuo = verificarConjuntoContinuo(numero);
    var divisibilidade = verificarDivisibilidade(numero);

    resultadoElement.innerHTML = "<strong>Conjuntos Numéricos:</strong><br>";
    resultadoElement.innerHTML += "Conjunto Discreto: " + (conjuntoDiscreto ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Conjunto Contínuo: " + (conjuntoContinuo ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "<strong>Divisibilidade:</strong><br>";
    resultadoElement.innerHTML += divisibilidade;
}

function verificarConjuntoDiscreto(numero) {
    return Number.isInteger(numero);
}

function verificarConjuntoContinuo(numero) {
    return Number.isFinite(numero) && !Number.isInteger(numero);
}

function verificarDivisibilidade(numero) {
    var divisibilidade = "<ul>";

    for (var i = 1; i <= 10; i++) {
        if (numero % i === 0) {
            divisibilidade += "<li>" + numero + " é divisível por " + i + "</li>";
        }
    }

    divisibilidade += "</ul>";
    return divisibilidade;
}