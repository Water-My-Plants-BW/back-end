const request = require("supertest");
const server = require("../api/server");
const db = require("../database/config");

describe("POST /register", () => {
  afterAll(async () => {
    await db("users").truncate();
    await db("users").delete();
  });
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("should return a 201 Created status code", async () => {
    const response = await request(server).post("/register").send({
      username: "Henry",
      password: "Password1",
      phoneNumber: 8675309,
    });
    expect(response.statusCode).toBe(201);
  });

  it("should return json", async () => {
    const response = await request(server).post("/register").send({
      username: "Henry",
      password: "Password1",
      phoneNumber: 8675309,
    });
    expect(response.type).toMatch(/json/i);
  });

  it("returning username", async () => {
    const response = await request(server).post("/register").send({
      username: "Henry",
      password: "Password1",
      phoneNumber: 8675309,
    });
    expect(response.body.username).toBe("Henry");
  });
});

describe("POST /login", () => {
  afterEach(async () => {
    await db("users").truncate();
  });
  beforeEach(async () => {
    await db("users").truncate();
    await request(server).post("/register").send({
      username: "Henry",
      password: "Password1",
      phoneNumber: 31334340,
    });
    afterAll(async () => {
      await db.destroy();
    });
  });

  it("should allow a registered user to log in", async () => {
    const response = await request(server)
      .post("/login")
      .send({ username: "Henry", password: "Password1" });
    expect(response.status).toBe(200);
  });
});
