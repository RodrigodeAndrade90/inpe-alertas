const { classificarAlerta } = require('../src/alerta');

test('classifica alerta CRÍTICO para valores acima de 80', () => {
  expect(classificarAlerta(90)).toBe('Crítico');
});

test('classifica alerta MODERADO para valores entre 40-80', () => {
  expect(classificarAlerta(60)).toBe('Moderado');
});

test('classifica alerta BAIXO para valores abaixo de 40', () => {
  expect(classificarAlerta(30)).toBe('Baixo');
});

// Teste para o exercício 4 - SIMULAR ERRO
test('teste final CI', () => {
  expect(2 + 2).toBe(4);
});