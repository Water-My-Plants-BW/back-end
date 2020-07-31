const request = require("supertest");
const server = require("../api/server");
require("dotenv").config();

describe("GET /users/:id/plants", () => {
  it("should return 200 and JSON", async () => {
    await request(server)
      .post("/login")
      .send({ username: "Henry", password: "password" })
      .then(async (res) => {
        // console.log(res.body, "res");
        await request(server)
          .get(`/users/${res.body.userId}/plants`)
          .set("token", res.body.token)

          .then((response) => {
            // console.log(response.headers, "response headers");
            expect(response.status).toBe(200);
            expect(response.type).toMatch(/json/i);
          });
      });
  });
});

describe("GET /plant/:plantid", () => {
  it("should return 200 and JSON", async () => {
    await request(server)
      .post("/login")
      .send({ username: "Henry", password: "password" })
      .then(async (res) => {
        // console.log(res.body, "res");
        await request(server)
          .get("/plants/:plantid")
          .set("token", res.body.token)

          .then((response) => {
            // console.log(response.headers, "response headers");
            expect(response.status).toBe(200);
            expect(response.type).toMatch(/json/i);
            // expect(response.length).toBe(1);
          });
      });
  });
});

describe("POST /users/:userId/plant", () => {
  it("should return 200 and JSON", async () => {
    await request(server)
      .post("/login")
      .send({ username: "Henry", password: "password" })
      .then(async (res) => {
        // console.log(res.body, "res");
        await request(server)
          .post(`/users/${res.body.userId}/plants`)
          .set("token", res.body.token)
          .send({
            nickname: "Local Test5",
            species: "TestPost2",
            h2oFrequency: 30,
          })

          .then((response) => {
            // console.log(response.headers, "response headers");
            expect(response.status).toBe(200);
            expect(response.type).toMatch(/json/i);
            expect(response.body.nickname).toBe("Local Test5");
          });
      });
  });
});
