import express from 'express';
import cors from 'cors';
import helloRoutes from './features/hello/hello.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/hello', helloRoutes);

export default app;
