const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const VALID_STATUSES = ['NEW', 'CONTACTED', 'QUALIFIED', 'IN_PROGRESS', 'CONVERTED', 'CLOSED'];

const listLeads = asyncHandler(async (req, res) => {
  const { status } = req.query;
  const where = status && VALID_STATUSES.includes(status) ? { status } : {};

  const leads = await prisma.contactLead.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  res.json({ success: true, data: leads });
});

const getLead = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const lead = await prisma.contactLead.findUnique({ where: { id } });
  if (!lead) throw new ApiError(404, 'Lead not found');
  res.json({ success: true, data: lead });
});

const updateLeadStatus = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  if (!VALID_STATUSES.includes(status)) {
    throw new ApiError(400, `Status must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  const existing = await prisma.contactLead.findUnique({ where: { id } });
  if (!existing) throw new ApiError(404, 'Lead not found');

  const lead = await prisma.contactLead.update({ where: { id }, data: { status } });
  res.json({ success: true, data: lead });
});

const deleteLead = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);

  const existing = await prisma.contactLead.findUnique({ where: { id } });
  if (!existing) throw new ApiError(404, 'Lead not found');

  await prisma.contactLead.delete({ where: { id } });
  res.json({ success: true, message: 'Lead deleted' });
});

const getStats = asyncHandler(async (req, res) => {
  const grouped = await prisma.contactLead.groupBy({
    by: ['status'],
    _count: { status: true },
  });

  const counts = Object.fromEntries(VALID_STATUSES.map((s) => [s, 0]));
  let total = 0;
  for (const row of grouped) {
    counts[row.status] = row._count.status;
    total += row._count.status;
  }

  res.json({ success: true, data: { total, ...counts } });
});

module.exports = { listLeads, getLead, updateLeadStatus, deleteLead, getStats };
