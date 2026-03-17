import { Router } from 'express';
import { CategoryController } from './category.controller';

const router = Router();
const categoryController = new CategoryController();

router.get('/', categoryController.getAll);
router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

export default router;
