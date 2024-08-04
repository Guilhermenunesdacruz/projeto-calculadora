function verificarPropriedades() {
    var numero = parseFloat(document.getElementById("numero").value);
    var resultadoElement = document.getElementById("resultado");

    // Verificar se o número é natural
    var isNatural = Number.isInteger(numero) && numero >= 0;

    // Verificar se o número é inteiro
    var isInteiro = Number.isInteger(numero);

    // Verificar se o número é racional
    var isRacional = Number.isFinite(numero);

    // Verificar se o número é irracional
    var isIrracional = !Number.isInteger(numero) && !Number.isNaN(numero);

    // Verificar se o número é real
    var isReal = !Number.isNaN(numero);

    resultadoElement.innerHTML = "<strong>Propriedades do número:</strong><br>";
    resultadoElement.innerHTML += "Natural: " + (isNatural ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Inteiro: " + (isInteiro ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Racional: " + (isRacional ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Irracional: " + (isIrracional ? "Sim" : "Não") + "<br>";
    resultadoElement.innerHTML += "Real: " + (isReal ? "Sim" : "Não");
}