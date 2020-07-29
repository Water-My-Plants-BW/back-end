const request = require("supertest");
const server = require("../api/server");
const db = require("../database/config");

describe("POST /register", () => {
  afterAll(async () => {
    await db("users").truncate();
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

describe("Post /login", () => {
  afterAll(async () => {
    await db("users").truncate();
  });

  beforeEach(async () => {
    await db("users").truncate();
    await await request(server).post("/register").send({
      username: "Henry1",
      password: "Password1",
      phoneNumber: 8675309,
    });
  });

  it("should allow registered user to sign in", async () => {
    const response = await (await request(server).post("/login")).send({
      username: "Henry1",
      password: "Password1",
    });
    expect(response.statusCode.toBe(200));
  });
});
