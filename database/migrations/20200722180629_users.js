exports.up = function (knex) {
  return knex.schema.createTable('users', (users) => {
    users.increments();

    users.string('username', 255).notNullable().unique();
    users.string('password', 255).notNullable();
    users.integer('phonenumber').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
