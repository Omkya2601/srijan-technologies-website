const express = require('express');
const { listIndustries, getIndustryBySlug } = require('../controllers/industryController');

const router = express.Router();

router.get('/', listIndustries);
router.get('/:slug', getIndustryBySlug);

module.exports = router;
