const { db } = require("../database/config");

require("dotenv");

require("dotenv");

describe("should be the correct environment", () => {
  it("Should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
