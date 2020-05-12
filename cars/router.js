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

router.get('/:id', (req, res) => {
  const {id} = req.params;

  Cars.findById(id)
    .then(car => {
      if (car) {
        res.status(200).json({data: car});
      } else {
        res.status(404).json({message: 'Invalid Id'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Could not reterive your information'});
    });
});

router.post('/', (req, res) => {
  const post = req.body;

  Cars.insert(post)
    .then(car => {
      res.status(201).json({data: car});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  Cars.update(id, changes)
    .then(car => {
      if (car) {
        res.status(200).json({data: car});
      } else {
        res.status(404).json({message: 'Invalid Id or missing content'});
      }
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;

  Cars.remove(id)
    .then(car => {
      if (car) {
        res.status(200).json({data: `${id} Id has been deleted`});
      } else {
        res.status(404).json({message: 'Invalid Id'});
      }
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
