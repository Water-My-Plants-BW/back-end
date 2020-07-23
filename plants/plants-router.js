const axios = require('axios');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the plants router!',
  });
});

module.exports = router;
