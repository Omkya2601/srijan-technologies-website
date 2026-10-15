const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');

const listFaqs = asyncHandler(async (req, res) => {
  const faqs = await prisma.faq.findMany({ orderBy: { order: 'asc' } });
  res.json({ success: true, data: faqs });
});

module.exports = { listFaqs };
