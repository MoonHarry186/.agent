import express from 'express';
import cors from 'cors';
import rootRouter from './routes';

const app = express();

app.use(cors());
app.use(express.json());

// Initialize centralized routing
app.use('/api', rootRouter);

export default app;
