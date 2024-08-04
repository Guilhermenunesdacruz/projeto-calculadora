function calcularMDC() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
  
    var resultado = document.getElementById('resultado');
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.innerHTML = 'Por favor, insira números válidos.';
      return;
    }
  
    resultado.innerHTML = 'O MDC de ' + num1 + ' e ' + num2 + ' é: ' + mdc(num1, num2);
  }
  
  function mdc(a, b) {
    if (b === 0) {
      return a;
    } else {
      return mdc(b, a % b);
    }
  }
  