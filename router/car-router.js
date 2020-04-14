const express = require('express');
const db = require('./car-model');

const router = express.Router();

router.get('/', (req, res) => {
  db.getCars()
    .then(cars => {
      res.status(200).json({data: cars});
    })
    .catch(err => {
      res.status(500).json({message: 'Cars could not be found'});
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  db.getCarsById(id)
    .then(cars => {
      if (cars) {
        res.status(200).json({data: cars});
      } else {
        res.status(404).json({message: 'The Id provided is incorrect'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Invalid credentails'});
    });
});

router.post('/', (req, res) => {
  const post = req.body;

  db.insert(post)
    .then(cars => {
      if (cars) {
        res.status(201).json({data: cars});
      } else {
        res.status(404).json({message: 'missing information'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Sorry, post could not be posted'});
    });
});

module.exports = router;
