function ordenarNumeros(num1, num2, num3) {
  // Caso 1: Los tres números son iguales
  if (num1 === num2 && num2 === num3) {
    return {
      iguales: true,
      mayorMenor: [num1, num2, num3],
      menorMayor: [num1, num2, num3]
    };
  } else {
    // Caso 2: Los números no son iguales, procedemos a ordenarlos.
    let mayor, centro, menor;

    if (num1 >= num2 && num1 >= num3) {
      mayor = num1;
      // Usamos un operador ternario para decidir entre num2 y num3
      centro = (num2 >= num3) ? num2 : num3;
      menor = (num2 < num3) ? num2 : num3;
    } else if (num2 >= num1 && num2 >= num3) {
      mayor = num2;
      centro = (num1 >= num3) ? num1 : num3;
      menor = (num1 < num3) ? num1 : num3;
    } else {
      mayor = num3;
      centro = (num1 >= num2) ? num1 : num2;
      menor = (num1 < num2) ? num1 : num2;
    }
    
    return {
      iguales: false,
      mayorMenor: [mayor, centro, menor],
      menorMayor: [menor, centro, mayor]
    };
  }
}

module.exports = ordenarNumeros;