const express = require('express');
const router = express.Router();
const { submitIntakeForm } = require('../controllers/intakeController');

// POST /api/intake
router.post('/', submitIntakeForm);

module.exports = router;
