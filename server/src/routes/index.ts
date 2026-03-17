import { Router } from 'express';
import helloRoutes from '../features/hello/hello.routes';

const rootRouter = Router();

// Mount all feature routes here
rootRouter.use('/hello', helloRoutes);

export default rootRouter;
