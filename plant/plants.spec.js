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
            expect(response.body[0].nickname).toBe("Planty1");
          });
      });
  });
});

describe("GET /plants/:plantid", () => {
  it("should return 200 and JSON", async () => {
    await request(server)
      .post("/login")
      .send({ username: "Henry", password: "password" })
      .then(async (res) => {
        // console.log(res.body, "res");
        await request(server)
          .get("/plants/1")
          .set("token", res.body.token)

          .then((response) => {
            // console.log(response.headers, "response headers");
            expect(response.status).toBe(200);
            expect(response.type).toMatch(/json/i);
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
            nickname: "LocalTesting",
            species: "TestPost5",
            h2oFrequency: 30,
          })

          .then((response) => {
            // console.log(response.headers, "response headers");
            expect(response.status).toBe(200);
            expect(response.type).toMatch(/json/i);
            expect(response.body.nickname).toBe("LocalTesting");
          });
      });
  });
});

describe("Delete /plants/:plantid", () => {
  it("should return 200 and JSON", async () => {
    await request(server)
      .post("/login")
      .send({ username: "Henry", password: "password" })
      .then(async (res) => {
        // console.log(res.body, "res");
        await request(server)
          .delete("/plants/1")
          .set("token", res.body.token)

          .then((response) => {
            // console.log(response.headers, "response headers");
            expect(response.status).toBe(200);
            expect(response.type).toMatch(/json/i);
          });
      });
  });
});
