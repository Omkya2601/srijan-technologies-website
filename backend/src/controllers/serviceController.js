const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const listServices = asyncHandler(async (req, res) => {
  const services = await prisma.service.findMany({ orderBy: { order: 'asc' } });
  res.json({ success: true, data: services });
});

const getServiceBySlug = asyncHandler(async (req, res) => {
  const service = await prisma.service.findUnique({ where: { slug: req.params.slug } });
  if (!service) throw new ApiError(404, 'Service not found');
  res.json({ success: true, data: service });
});

module.exports = { listServices, getServiceBySlug };
