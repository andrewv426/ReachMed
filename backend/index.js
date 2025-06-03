// 1. Import the express library
const express = require('express');
const config = require('./config');
const logger = require('./middleware/logger');
const cors = require('./middleware/cors');
const errorHandler = require('./middleware/errorHandler');

const healthRoutes = require('./routes/health');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);
app.use(cors);

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/intake', require('./routes/intake'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Centralized error handler
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});
