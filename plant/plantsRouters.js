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

// Get plant by ID

// router.get(
//   "users/:id/plants/:plantID",
//   validateUserId(),
//   async (req, res, next) => {
//     try {
//       const plant = await Plants.findPlantsByID(
//         req.params.id,
//         req.params.plantID
//       );
//       if (!plant) {
//         return res.status(404).json({ message: "Plants not found" });
//       }
//       res.json(plants);
//     } catch (err) {
//       next(err);
//     }
//   }
// );

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
