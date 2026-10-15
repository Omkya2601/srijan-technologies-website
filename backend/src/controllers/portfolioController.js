const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const listPortfolio = asyncHandler(async (req, res) => {
  const projects = await prisma.portfolio.findMany({ orderBy: { order: 'asc' } });
  res.json({ success: true, data: projects });
});

const getPortfolioBySlug = asyncHandler(async (req, res) => {
  const project = await prisma.portfolio.findUnique({ where: { slug: req.params.slug } });
  if (!project) throw new ApiError(404, 'Case study not found');
  res.json({ success: true, data: project });
});

module.exports = { listPortfolio, getPortfolioBySlug };
