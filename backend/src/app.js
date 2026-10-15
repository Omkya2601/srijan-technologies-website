const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { clientUrls, nodeEnv } = require('./config/env');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const serviceRoutes = require('./routes/services');
const industryRoutes = require('./routes/industries');
const portfolioRoutes = require('./routes/portfolio');
const careerRoutes = require('./routes/careers');
const faqRoutes = require('./routes/faqs');
const adminRoutes = require('./routes/admin');

const app = express();

// Render (and most hosts) sit behind one reverse proxy; trust it so req.ip — and
// therefore the rate limiters — see the real client IP instead of the proxy's.
app.set('trust proxy', 1);

app.use(helmet());
// In development, accept the frontend from any localhost/127.0.0.1 port (Vite may pick 5174+).
const devOrigin = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/;
app.use(cors({ origin: nodeEnv === 'production' ? clientUrls : [...clientUrls, devOrigin] }));
app.use(express.json({ limit: '10kb' }));
if (nodeEnv !== 'test') app.use(morgan(nodeEnv === 'production' ? 'combined' : 'dev'));

app.get('/api/health', (req, res) => res.json({ success: true, message: 'API is running' }));

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/industries', industryRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/admin', adminRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
