const express = require('express');
const router = express.Router();
const { addProperty, getAllProperties, deleteProperty } = require('../controllers/PropertyController');
const verifyToken = require('../middleware/verifyToken');

router.post('/add', verifyToken, addProperty);
router.get('/all', verifyToken, getAllProperties);
router.delete('/:id', verifyToken, deleteProperty);

module.exports = router;
