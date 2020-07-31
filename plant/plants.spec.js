const request = require("supertest");
const server = require("../api/server");
const db = require("../database/config");
require("dotenv").config();

describe("GET /users/:id/plants", () => {
  it("should return 200 http status code", async () => {
    await request(server)
      .post("/login")
      .send({ username: "Henry", password: "password" })
      .then(async (res) => {
        console.log(res.body, "res");
        await request(server)
          .get(`/users/${res.body.userId}/plants`)
          .set("token", res.body.token)

          .then((response) => {
            console.log(response.headers, "response headers");
            expect(response.status).toBe(200);
          });
      });
  });
});
