const express = require('express');
const { body } = require('express-validator');
const { createLead } = require('../controllers/contactController');
const validate = require('../middleware/validate');
const { contactLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/',
  contactLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 120 }),
    body('email').trim().isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('phone').optional({ checkFalsy: true }).trim().isLength({ max: 30 }),
    body('company').optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
    body('service').optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
    body('industry').optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
    body('projectType').optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
    body('stage').optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
    body('timeline').optional({ checkFalsy: true }).trim().isLength({ max: 150 }),
    body('budget').optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
    body('message')
      .trim()
      .notEmpty()
      .withMessage('Please describe your project')
      .isLength({ max: 3000 }),
  ],
  validate,
  createLead
);

module.exports = router;
