import { Router } from 'express';
import categoryRoutes from '../features/category/category.routes';
import productRoutes from '../features/product/product.routes';

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

export default router;
