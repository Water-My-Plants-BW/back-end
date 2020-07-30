const request = require("supertest");
const server = require("../api/server");
const db = require("../database/config");

describe("GET /users/:id/plants", () => {
  afterAll(async () => {
    await db("plants").truncate();
    await db("users").truncate();
  });
  beforeEach(async () => {
    await db("plants").truncate();
    await db("users").truncate();
    await request(server).post("/register").send({
      username: "Tim",
      password: "Password1",
      phoneNumber: 31334340,
    });
  });

  it("should return 200 status code", async () => {
    const login = await request(server)
      .post("/login")
      .send({ username: "Tim", password: "Password1" });

    const post = await request(server)
      .get(`/users/${login.body.userID}/plants`)
      .set("token", login.body.token);
    expect(post.status).toBe(200);
  });
});
