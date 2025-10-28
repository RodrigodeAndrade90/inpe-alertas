test("simulação de envio (mock)", () => {
  const api = { enviar: jest.fn(() => "Simulado!") };
  const resposta = api.enviar();
  expect(api.enviar).toHaveBeenCalledTimes(1);
  expect(resposta).toBe("Simulado!");
});
