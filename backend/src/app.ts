// Import express, cors, helmet and morgan
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';

// Import Database config
import { initCustomers } from './database/helpers';

// Create Express server
const app = express(); // New express instance
const port = process.env.PORT || 3000; // Port number, use environment variable if available

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan('dev')); // Enable Morgan
app.use(express.json()); // Enable JSON body parser

// Initialize database and customer table
(async () => {
  try {
    await initCustomers();
  } catch (error) {
    console.error('Error initializing the database:', error);
  }
})();

// Use routes
app.use('/', router);

// Start Express server
app.listen(port, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;