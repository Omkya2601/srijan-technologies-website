const express = require('express');
const { listPortfolio, getPortfolioBySlug } = require('../controllers/portfolioController');

const router = express.Router();

router.get('/', listPortfolio);
router.get('/:slug', getPortfolioBySlug);

module.exports = router;
