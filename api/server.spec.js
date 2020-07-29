const { db } = require("../database/config");

require("dotenv");

require("dotenv");

describe("should be the correct environment", () => {
  afterAll(async () => {
    await db("users").truncate();
  });

  it("Should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
