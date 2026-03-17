import { Router } from 'express';
import { ProductController } from './product.controller';

const router = Router();
const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
router.get('/category/:categoryId', productController.getByCategory);

export default router;
