const express = require('express');
const router = express.Router();

const {addProperty, getAllProperties, deleteProperty} = require('../controllers/PropertyController');
const { get } = require('./authRoutes');
router.post('/add',addProperty);
router.get('all',getAllProperties);
router.delete(':id',deleteProperty);

module.exports = router;
