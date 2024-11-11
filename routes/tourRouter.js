const express = require('express');
const router = express.Router();
const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourControllers');
const checkAdminRole = require('../middleware/auth');

// GET /tours
router.get('/', getAllTours);

// POST /tours
router.post('/', checkAdminRole, createTour);

// GET /tours/:tourId
router.get('/:tourId', getTourById);

// PUT /tours/:tourId
router.put('/:tourId', checkAdminRole, updateTour);

// DELETE /tours/:tourId
router.delete('/:tourId', checkAdminRole, deleteTour);

module.exports = router;
