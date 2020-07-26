const express = require("express");
const Users = require("../authentification/authModels");
const Plants = require("./plantModels");
const restrict = require("../authentification/restrictMiddleware");

const router = express.Router();

// Get All of a specific users plants

// router.get("/user/:userid/plants", restrict(), async (req, res) => {
//   const { userid } = req.params;
//   entry.plants.user_id = userid;
//   Users.findById(userid).then((user) => {
//     if (user) {
//       Plants.getAllPlants(userid)
//         .then((plants) => {
//           res.status(200).json(plants);
//         })
//         .catch((err) => {
//           res.status(500).json(err);
//         });
//     } else {
//       res.status(400).json({ message: "User does not exist" });
//     }
//   });
// });

router.get("/users/:id/plants", async (req, res, next) => {
  try {
    const plants = await Plants.findPlantsByUserID(req.params.id);
    res.json(plants);
  } catch (err) {
    next(err);
  }
});

// Get plant by ID

// router.get("/plants/:plantid", (req, res) => {
//   const { plantid } = req.params;
//   Plants.findById(plantid)
//     .then((plant) => {
//       res.status(200).json(plant);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

router.get("/users/:id/plants/plantId");
// Post a new Plant

// Put an existing Plant

// Delete an existing plant

module.exports = router;
