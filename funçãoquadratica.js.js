function resolverQuadratica() {
    var a = parseFloat(document.getElementById("coeficienteA").value);
    var b = parseFloat(document.getElementById("coeficienteB").value);
    var c = parseFloat(document.getElementById("coeficienteC").value);

    var discriminante = b**2 - 4*a*c;
    var resultadoElement = document.getElementById("resultado");

    if (discriminante < 0) {
        resultadoElement.textContent = "Não há raízes reais.";
    } else if (discriminante === 0) {
        var raiz = -b / (2*a);
        resultadoElement.textContent = "Há uma raiz real: " + raiz;
    } else {
        var raiz1 = (-b + Math.sqrt(discriminante)) / (2*a);
        var raiz2 = (-b - Math.sqrt(discriminante)) / (2*a);
        resultadoElement.textContent = "Há duas raízes reais: " + raiz1 + " e " + raiz2;
    }
}

