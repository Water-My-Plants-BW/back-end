const request = require("supertest");
const server = require("../api/server");

describe("POST /register", () => {
  it("should return a 201 Created status code", async () => {
    const response = await request(server).post("/register").send({
      username: "Mike",
      password: "Password2",
      phoneNumber: 8675309,
    });
    expect(response.statusCode).toBe(201);
  });

  it("should return json", async () => {
    const response = await request(server).post("/register").send({
      username: "Tommy",
      password: "Password2",
      phoneNumber: 8675309,
    });
    expect(response.type).toMatch(/json/i);
  });

  it("returning username", async () => {
    const response = await request(server).post("/register").send({
      username: "Bobby",
      password: "Password2",
      phoneNumber: 8675309,
    });
    expect(response.body.username).toBe("Bobby");
  });
});

describe("POST /login", () => {
  it("should allow a registered user to log in", async () => {
    const response = await request(server)
      .post("/login")
      .send({ username: "Tim", password: "Password2" });
    expect(response.status).toBe(200);
  });
});
