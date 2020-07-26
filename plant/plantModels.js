const db = require("../database/config");

function getAllPlants(id) {
  return db("plants as p")
    .join("users as u, u.id, p.user_id")
    .select(
      "p.id",
      "p.nickname",
      "p.species",
      "p.h2oFrequency",
      "p.image",
      "p.user_id"
    )
    .where("u.id", id);
}

function findById(id) {
  return db("plants").where({ id }).first();
}

function addPlants(plantData) {
  return db("plants").insert(plantData);
}

async function updatePlant(id, changes) {
  await db("plants").where({ id }).update(changes);
  return findById(id);
}

function removePlants(id) {
  return db("plants").where({ id }).del();
}

module.exports = {
  getAllPlants,
  findById,
  addPlants,
  updatePlant,
  removePlants,
};
