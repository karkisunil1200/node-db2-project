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

router.put('/:id', (req, res) => {
  const {id} = req.params;

  const changes = req.body;

  db.update(id, changes)
    .then(car => {
      if (car) {
        res.status(200).json({data: car});
      } else {
        res.status(404).json({message: 'There was a issue with the Id', error: car.message});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'There was error. Could not update'});
    });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  db.remove(id)
    .then(car => {
      if (car) {
        res.status(200).json({data: car});
      } else {
        res.status(404).json({message: 'Invalid Id, please try again'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Something went wrong deleting your content'});
    });
});

module.exports = router;
