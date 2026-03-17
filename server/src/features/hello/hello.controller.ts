import { Request, Response } from 'express';
import { z } from 'zod';
import { BaseController } from '../../common/BaseController';
import { helloService } from './hello.service';

const helloSchema = z.object({
  name: z.string().min(1, 'Validation Error: Name is required.')
});

export class HelloController extends BaseController {
  public async getGreeting(req: Request, res: Response): Promise<void> {
    try {
      const input = helloSchema.parse(req.body);
      
      const message = helloService.getGreeting(input.name);
      
      this.handleSuccess(res, null, message);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: (error as any).errors[0].message
        });
      } else {
        this.handleError(res, error, 'HelloController.getGreeting');
      }
    }
  }
}

export const helloController = new HelloController();
