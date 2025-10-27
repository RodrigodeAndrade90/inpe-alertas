const { calcularMedia, calcularFrete } = require('../src/calculos');

test('calcula média corretamente', () => {
  expect(calcularMedia([1, 2, 3, 4, 5])).toBe(3);
});

test('calcula frete corretamente', () => {
  expect(calcularFrete(2, 100)).toBe(10 + 1 + 10); // base + peso + distância
});