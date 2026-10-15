const express = require('express');
const { body } = require('express-validator');
const { submitApplication } = require('../controllers/careerController');
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
    body('roleInterest').trim().notEmpty().withMessage('Please select a role').isLength({ max: 150 }),
    body('resumeLink').optional({ checkFalsy: true }).trim().isURL().withMessage('Please provide a valid link'),
    body('message').trim().notEmpty().withMessage('Please add a short note').isLength({ max: 3000 }),
  ],
  validate,
  submitApplication
);

module.exports = router;
