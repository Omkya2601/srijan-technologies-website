const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');

const createLead = asyncHandler(async (req, res) => {
  const { name, email, phone, company, service, industry, projectType, stage, timeline, budget, message } =
    req.body;

  const lead = await prisma.contactLead.create({
    data: { name, email, phone, company, service, industry, projectType, stage, timeline, budget, message },
  });

  res.status(201).json({
    success: true,
    message: 'Thanks for reaching out — our team will get back to you within one business day.',
    data: { id: lead.id },
  });
});

module.exports = { createLead };
