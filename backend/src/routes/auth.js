const express = require('express');
const { body } = require('express-validator');
const { login, me } = require('../controllers/authController');
const validate = require('../middleware/validate');
const requireAuth = require('../middleware/auth');
const { loginLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

router.post(
  '/login',
  loginLimiter,
  [
    body('email').trim().isEmail().withMessage('A valid email is required').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate,
  login
);

router.get('/me', requireAuth, me);

module.exports = router;
