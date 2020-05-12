const express = require('express');
const Cars = require('./cars-model');

const router = express.Router();

router.get('/', (req, res) => {
  Cars.findAll()
    .then(cars => {
      res.status(200).json({data: cars});
    })
    .catch(err => {
      res.status(500).json({err});
    });
});

module.exports = router;
