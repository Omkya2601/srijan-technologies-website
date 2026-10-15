const prisma = require('../config/prisma');
const asyncHandler = require('../utils/asyncHandler');

const submitApplication = asyncHandler(async (req, res) => {
  const { name, email, phone, roleInterest, resumeLink, message } = req.body;

  const application = await prisma.careerApplication.create({
    data: { name, email, phone, roleInterest, resumeLink, message },
  });

  res.status(201).json({
    success: true,
    message: "Thanks for reaching out — we'll review your application and get back to you if there's a fit.",
    data: { id: application.id },
  });
});

module.exports = { submitApplication };
