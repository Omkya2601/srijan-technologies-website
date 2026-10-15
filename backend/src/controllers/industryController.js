const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const listIndustries = asyncHandler(async (req, res) => {
  const industries = await prisma.industry.findMany({ orderBy: { order: 'asc' } });
  res.json({ success: true, data: industries });
});

const getIndustryBySlug = asyncHandler(async (req, res) => {
  const industry = await prisma.industry.findUnique({ where: { slug: req.params.slug } });
  if (!industry) throw new ApiError(404, 'Industry not found');
  res.json({ success: true, data: industry });
});

module.exports = { listIndustries, getIndustryBySlug };
