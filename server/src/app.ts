import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGO_URI = 'mongodb://localhost:27017/user-auth-db';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', routes);

export default app;
