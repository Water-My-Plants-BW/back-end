const db = require("../database/config");

// function getAllPlants(id) {
//   return db("plants as p")
//     .join("users as u, u.id, p.user_id")
//     .select(
//       "p.id",
//       "p.nickname",
//       "p.species",
//       "p.h2oFrequency",
//       "p.image",
//       "p.user_id"
//     )
//     .where("u.id", id);
// }

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

function findPlantsByID(userId, plantID) {
  return db("posts as plants")
    .innerJoin("users as u", "u.id", "p.user_id")
    .where("p.user_id", userId)
    .where("p.id", plantID)
    .select("p.nickname", "p.species", "p.h2oFrequency", "p.image");
}

module.exports = {
  //   getAllPlants,
  findById,
  addPlants,
  updatePlant,
  removePlants,
  findPlantsByUserID,
  findPlantsByID,
};
