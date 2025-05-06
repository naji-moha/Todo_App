const express = require('express');
const cors = require('cors');
const todoRoutes = require('./todoRoutes');
const sequelize = require('./sequelize');
const Todo = require('../models/Todo');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route (optional, to avoid "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Welcome to the Todo REST API. Visit /api-docs for Swagger documentation.');
});

// Todo API routes
app.use('/api', todoRoutes);

// Swagger Setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'Todo REST API with Sequelize and Swagger',
    },
    servers: [{ url: 'http://localhost:5000/api' }],
  },
  apis: ['./todoRoutes.js'], // adjust path if needed
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sync DB and start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
});
