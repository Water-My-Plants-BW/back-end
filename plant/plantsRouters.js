const express = require("express");
const Users = require("../authentification/authModels");
const Plants = require("./plantModels");
const restrict = require("../authentification/restrictMiddleware");
const db = require("../database/config");

const router = express.Router();

// Get All of a specific users plants

router.get(
  "/users/:id/plants",
  validateUserId(),
  restrict(),
  async (req, res, next) => {
    try {
      const plants = await Plants.findPlantsByUserID(req.params.id);
      res.json(plants);
    } catch (err) {
      next(err);
    }
  }
);

// Get an individual plant

router.get("/plants/:plantid", restrict(), (req, res, next) => {
  const { plantid } = req.params;
  Plants.findById(plantid)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => {
      res.status(err);
    });
});

// Post a new Plant

// Put an existing Plant

// Delete an existing plant

// MiddleWare
function validateUserId() {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await db("users").where({ id }).first();

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      req.user = user;
      next();
    } catch (err) {
      next(err);
    }
  };
}
module.exports = router;
