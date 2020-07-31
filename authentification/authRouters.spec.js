const request = require("supertest");
const server = require("../api/server");

describe("POST /register", () => {
  it("Status Code, json,username", async () => {
    const response = await request(server).post("/register").send({
      username: "Reggie3",
      password: "Password2",
      phoneNumber: 8675309,
    });
    expect(response.statusCode).toBe(201);

    expect(response.type).toMatch(/json/i);

    expect(response.body.username).toBe("Reggie3");
  });
});

describe("POST /login", () => {
  it("should allow a registered user to log in", async () => {
    const response = await request(server)
      .post("/login")
      .send({ username: "Reggie3", password: "Password2" });
    expect(response.status).toBe(200);
  });
});
