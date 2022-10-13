const express = require('express');
const { getAllUsers, createNewUser } = require('../controllers/users');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/register', createNewUser);

module.exports = router;
