const bcrypt = require("bcrypt");

const user1 = {
  username: "Henry",
  password: "password",
  phoneNumber: 313989879,
};
user1.password = bcrypt.hashSync(user1.password, 10);

const user2 = {
  username: "Dan",
  password: "Me123",
  phoneNumber: 313989879,
};
user2.password = bcrypt.hashSync(user1.password, 10);

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([user1, user2]);
    });
};
