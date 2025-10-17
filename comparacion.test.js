const ordenarNumeros = require('./comparacion.js');

describe('ordenarNumeros con lógica if/else', () => {

  test('debe ordenar correctamente cuando dos números mayores son iguales (4, 4, 2)', () => {
    const salidaEsperada = {
      iguales: false,
      mayorMenor: [4, 4, 2],
      menorMayor: [2, 4, 4]
    };
    expect(ordenarNumeros(4, 4, 2)).toEqual(salidaEsperada);
  });
  
  test('debe ordenar correctamente cuando dos números menores son iguales (4, 2, 2)', () => {
    const salidaEsperada = {
      iguales: false,
      mayorMenor: [4, 2, 2],
      menorMayor: [2, 2, 4]
    };
    expect(ordenarNumeros(4, 2, 2)).toEqual(salidaEsperada);
  });
  
  test('debe ordenar correctamente números desordenados (4, 2, 3)', () => {
    const salidaEsperada = {
      iguales: false,
      mayorMenor: [4, 3, 2],
      menorMayor: [2, 3, 4]
    };
    expect(ordenarNumeros(4, 2, 3)).toEqual(salidaEsperada);
  });
  
  test('debe mantener el orden si los números ya están de mayor a menor (4, 3, 2)', () => {
    const salidaEsperada = {
      iguales: false,
      mayorMenor: [4, 3, 2],
      menorMayor: [2, 3, 4]
    };
    expect(ordenarNumeros(4, 3, 2)).toEqual(salidaEsperada);
  });
  
  test('debe identificar correctamente cuando todos los números son iguales (4, 4, 4)', () => {
    const salidaEsperada = {
      iguales: true,
      mayorMenor: [4, 4, 4],
      menorMayor: [4, 4, 4]
    };
    expect(ordenarNumeros(4, 4, 4)).toEqual(salidaEsperada);
  });

});