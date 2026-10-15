const { nodeEnv } = require('../config/env');

function notFound(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode && err.statusCode >= 400 ? err.statusCode : 500;
  const response = {
    success: false,
    message: err.message || 'Internal server error',
  };
  if (err.details) response.details = err.details;
  if (nodeEnv !== 'production' && statusCode === 500) response.stack = err.stack;

  if (statusCode === 500) console.error(err);

  res.status(statusCode).json(response);
}

module.exports = { notFound, errorHandler };
