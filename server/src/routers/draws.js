const express = require('express');
const { getAllDraws, createNewDraw } = require('../controllers/draws');

const router = express.Router();

router.get('/', getAllDraws);
router.post('/create', createNewDraw);

module.exports = router;
