const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');
const checkAdminRole = require('../middleware/auth');

// GET /users
router.get('/', getAllUsers);

// POST /users
router.post('/', checkAdminRole, createUser);

// GET /users/:userId
router.get('/:userId', getUserById);

// PUT /users/:userId
router.put('/:userId', checkAdminRole, updateUser);

// DELETE /users/:userId
router.delete('/:userId', checkAdminRole, deleteUser);

module.exports = router;
