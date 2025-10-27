function calcularMedia(numeros) {
  if (numeros.length === 0) return 0;
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  return soma / numeros.length;
}

function calcularFrete(peso, distancia) {
  const base = 10;
  const custoPeso = peso * 0.5;
  const custoDistancia = distancia * 0.1;
  return base + custoPeso + custoDistancia;
}

module.exports = { calcularMedia, calcularFrete };