const express = require('express');
const { body } = require('express-validator');
const {
  listLeads,
  getLead,
  updateLeadStatus,
  deleteLead,
  getStats,
} = require('../controllers/adminController');
const requireAuth = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();

router.use(requireAuth);

router.get('/stats', getStats);
router.get('/leads', listLeads);
router.get('/leads/:id', getLead);
router.patch(
  '/leads/:id',
  [body('status').notEmpty().withMessage('Status is required')],
  validate,
  updateLeadStatus
);
router.delete('/leads/:id', deleteLead);

module.exports = router;
