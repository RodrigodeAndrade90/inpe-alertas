function classificarAlerta(valor) {
  if (valor > 80) {
    return 'Crítico';
  } else if (valor >= 40 && valor <= 80) {
    return 'Moderado';
  } else {
    return 'Baixo';
  }
}

module.exports = { classificarAlerta };