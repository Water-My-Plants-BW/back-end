exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments();
    table.text("username").notNull().unique();
    table.text("phoneNumber").notNull();
    table.text("password").notNull();
  });

  await knex.schema.createTable("plants", (table) => {
    table.increments();
    table.text("nickname").notNull().unique();
    table.text("species").notNull().unique();
    table.text("h2oFrequency").notNull();
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("plants");
};
