const db = require("../database/config");
async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function find() {
  return db("users").select("id", "username").orderBy("id");
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "password", "phoneNumber")
    .where(filter);
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

function update(changes, id) {
  return db("users").where({ id }).update(changes);
}

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
};
