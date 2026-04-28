// Testar o retorno da API '/api/v1/status'
test("GET to/api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  // teste para ver o body 'texto' do que esta rodando na url acima
  const responseBody = await response.json();
  console.log(responseBody);

  // teste espera que a propridade updated_at esteja definido, ou seja existe.
  expect(responseBody.updated_at).toBeDefined();

  //Verifica que o valor do updated_at é a data now esperada
  const parsedUpdateAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdateAt);

  // Verifica version do Postgres
  expect(responseBody.dependencies.database.version).toEqual("16.0");
});
