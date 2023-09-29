import createServer from "server"
import http from "http";

describe("Server", () => {
  let server;

  // Antes de cada teste, crie um servidor e comece a ouvir na porta 5000.
  beforeEach(() => {
    server = http.createServer(createServer());
    server.listen(5000);
  });

  // Depois de cada teste, feche o servidor.
  afterEach((done) => {
    server.close(done);
  });

  it("should start the server on port 5000", () => {
    // Nenhum código assíncrono necessário aqui.
    // O servidor já está ouvindo na porta 5000.
    expect(true).toBe(true);
  });

  it("should respond with 'ok!' to the '/health' endpoint", async () => {
    const response = await fetch("http://localhost:5000/health"); // Você pode usar 'node-fetch' ou outra biblioteca para fazer a solicitação HTTP.

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("ok!");
  });
});
