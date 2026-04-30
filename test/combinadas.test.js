const suma = require('../src/suma');
const multiplicacion = require('../src/multiplicacion');

test('multiplicacion de 2 * 3 y suma de 4 debe ser 10', () => {
  const resultadoMultiplicacion = multiplicacion(2, 3);
  const resultadoFinal = suma(resultadoMultiplicacion, 4);
  expect(resultadoFinal).toBe(10);
});

test('suma de 5 + 5 y multiplicacion por 2 debe ser 20', () => {
  const resultadoSuma = suma(5, 5);
  const resultadoFinal = multiplicacion(resultadoSuma, 2);
  expect(resultadoFinal).toBe(20);
});
