exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments().notNullable().primary();
      users.string("username", 255).notNullable().unique();
      users.string("password", 255).notNullable();
      users.integer("phoneNumber").notNullable();
    })
    .createTable("plants", (plants) => {
      plants.increments();
      plants.string("nickname", 255).notNullable().unique();
      plants.string("species", 255).notNullable();
      plants.integer("h2oFrequency").notNullable();
      plants.string("image", 255).unique();
      plants
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
};
