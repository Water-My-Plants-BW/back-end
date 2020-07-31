const request = require("supertest");
const server = require("../api/server");
const db = require("../database/config");

describe("GET /users/:id/plants", () => {
  //   afterAll(async () => {
  //     await db("plants").truncate();
  //     await db("users").truncate();
  //   });
  //   beforeEach(async () => {
  //     // await db("plants").truncate();
  //     // await db("users").truncate();
  //     await request(server)
  //       .post("/register")
  //       .send({ username: "Pat", password: "pass", phoneNumber: 3232323 });
  //   });

  it("should return 200 http status code", async () => {
    await request(server)
      .post("/login")
      .send({ username: "Henry", password: "password" })
      .then(async (res) => {
        console.log(res.body, "res");
        await request(server)
          .get("/users/1/plants")
          .set("authorization", res.body.token)

          .then((response) => {
            console.log(response, "response");
            expect(response.statusCode).toBe(200);
          });
      });
  });
});
