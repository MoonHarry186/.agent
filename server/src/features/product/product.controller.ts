import { Request, Response } from 'express';
import { BaseController } from '../../common/BaseController';
import Product from '../../models/Product';
import Category from '../../models/Category';
import { z } from 'zod';

const ProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be positive'),
  stock: z.number().min(0, 'Stock cannot be negative'),
  categoryId: z.string().min(1, 'CategoryId is required'),
});

export class ProductController extends BaseController {
  
  // [GET] /api/products
  getAll = async (req: Request, res: Response) => {
    try {
      const products = await Product.find().populate('categoryId').sort({ createdAt: -1 });
      return this.sendSuccess(res, 'Products retrieved successfully', products);
    } catch (error: any) {
      return this.sendError(res, error.message);
    }
  };

  // [POST] /api/products
  create = async (req: Request, res: Response) => {
    try {
      const validatedData = ProductSchema.parse(req.body);
      
      // Check if category exists
      const category = await Category.findById(validatedData.categoryId);
      if (!category) {
        return this.sendError(res, 'Category not found', 404);
      }

      // Check if product name exists
      const existing = await Product.findOne({ name: validatedData.name });
      if (existing) {
        return this.sendError(res, 'Product name already exists', 400);
      }

      const product = new Product(validatedData);
      await product.save();

      return this.sendSuccess(res, 'Product created successfully', product, 201);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return this.sendError(res, error.errors[0].message, 400);
      }
      return this.sendError(res, error.message);
    }
  };

  // [PUT] /api/products/:id
  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const validatedData = ProductSchema.parse(req.body);

      // Check if category exists
      const category = await Category.findById(validatedData.categoryId);
      if (!category) {
        return this.sendError(res, 'Category not found', 404);
      }

      const product = await Product.findByIdAndUpdate(id, validatedData, { new: true });
      if (!product) {
        return this.sendError(res, 'Product not found', 404);
      }

      return this.sendSuccess(res, 'Product updated successfully', product);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return this.sendError(res, error.errors[0].message, 400);
      }
      return this.sendError(res, error.message);
    }
  };

  // [DELETE] /api/products/:id
  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return this.sendError(res, 'Product not found', 404);
      }

      return this.sendSuccess(res, 'Product deleted successfully');
    } catch (error: any) {
      return this.sendError(res, error.message);
    }
  };

  // [GET] /api/products/category/:categoryId
  getByCategory = async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;
      const products = await Product.find({ categoryId }).populate('categoryId');
      return this.sendSuccess(res, 'Products retrieved successfully', products);
    } catch (error: any) {
      return this.sendError(res, error.message);
    }
  };
}
