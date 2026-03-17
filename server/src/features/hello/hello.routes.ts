import { Router } from 'express';
import { helloController } from './hello.controller';

const router = Router();

router.post('/', (req, res) => {
  helloController.getGreeting(req, res);
});

export default router;
