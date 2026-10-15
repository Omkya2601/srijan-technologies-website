const express = require('express');
const { listFaqs } = require('../controllers/faqController');

const router = express.Router();

router.get('/', listFaqs);

module.exports = router;
