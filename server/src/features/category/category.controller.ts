import { Request, Response } from 'express';
import { BaseController } from '../../common/BaseController';
import Category from '../../models/Category';
import Product from '../../models/Product';
import { z } from 'zod';

const CategorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),
});

export class CategoryController extends BaseController {
  
  // [GET] /api/categories
  getAll = async (req: Request, res: Response) => {
    try {
      const categories = await Category.find().sort({ createdAt: -1 });
      return this.sendSuccess(res, 'Categories retrieved successfully', categories);
    } catch (error: any) {
      return this.sendError(res, error.message);
    }
  };

  // [POST] /api/categories
  create = async (req: Request, res: Response) => {
    try {
      const validatedData = CategorySchema.parse(req.body);
      
      const existing = await Category.findOne({ name: validatedData.name });
      if (existing) {
        return this.sendError(res, 'Category name already exists', 400);
      }

      const category = new Category(validatedData);
      await category.save();

      return this.sendSuccess(res, 'Category created successfully', category, 201);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return this.sendError(res, error.errors[0].message, 400);
      }
      return this.sendError(res, error.message);
    }
  };

  // [PUT] /api/categories/:id
  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const validatedData = CategorySchema.parse(req.body);

      const category = await Category.findByIdAndUpdate(id, validatedData, { new: true });
      if (!category) {
        return this.sendError(res, 'Category not found', 404);
      }

      return this.sendSuccess(res, 'Category updated successfully', category);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return this.sendError(res, error.errors[0].message, 400);
      }
      return this.sendError(res, error.message);
    }
  };

  // [DELETE] /api/categories/:id
  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Constraint: Check if category has products
      const productsCount = await Product.countDocuments({ categoryId: id });
      if (productsCount > 0) {
        return this.sendError(res, 'Cannot delete category containing products', 400);
      }

      const category = await Category.findByIdAndDelete(id);
      if (!category) {
        return this.sendError(res, 'Category not found', 404);
      }

      return this.sendSuccess(res, 'Category deleted successfully');
    } catch (error: any) {
      return this.sendError(res, error.message);
    }
  };
}
