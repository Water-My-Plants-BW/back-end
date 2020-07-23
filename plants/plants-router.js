const axios = require('axios');
const express = require('express');
const server = express();
const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our API',
  });

  axios
    .get('http://localhost:4000/api/plants')
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error Fetching Plants', error: err });
    });
});

module.exports = router;
