const db = require("../database/config");

function findById(id) {
  return db("plants").where({ id }).first();
}

function addPlants(plantData) {
  return db("plants").insert(plantData);
}

async function updatePlant(changes, id) {
  await db("plants").where({ id }).update(changes);
  return db("plants").where({ id }).first();
}

function removePlants(id) {
  return db("plants").where({ id }).del();
}

function findPlantsByUserID(userId) {
  return db("plants as p")
    .innerJoin("users as u", "u.id", "p.user_id")
    .where("p.user_id", userId)
    .select(
      "p.id",
      "p.nickname",
      "p.species",
      "p.h2oFrequency",
      "p.image",
      "p.user_id"
    );
}

module.exports = {
  findById,
  addPlants,
  updatePlant,
  removePlants,
  findPlantsByUserID,
};
