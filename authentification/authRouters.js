const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("./authModels");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, phoneNumber } = req.body;
    const user = await Users.findBy({ username }).first();

    if (user) {
      return res.status(409).json({ message: "Username already taken" });
    }
    const newUser = await Users.add({
      username,
      password: await bcrypt.hash(password, 14),
      phoneNumber,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const payload = {
      userId: user.id,
      username: user.username,
    };
    // res.cookie("token", jwt.sign(payload, process.env.JWT_SECRET));

    res.json({
      message: `Welcome ${user.username}!`,
      token: jwt.sign(payload, process.env.JWT_SECRET || "secret"),
      userId: `${user.id}`,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.put("/user/:id", async (req, res, next) => {
  const { id } = req.params;
  const { phoneNumber } = req.body;
  const changes = {
    // password: await bcrypt.hash(password, 14),
    phoneNumber: phoneNumber,
  };

  Users.findById(id)
    .then((user) => {
      if (user) {
        Users.update(changes, id).then((updatedUser) => {
          res.json(updatedUser);
        });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

module.exports = router;
