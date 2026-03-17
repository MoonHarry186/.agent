import { Response } from 'express';

export abstract class BaseController {
  
  protected handleSuccess(res: Response, data: any, message: string = "Success", statusCode: number = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  protected handleError(res: Response, error: any, context?: string) {
    // Note: In a real app we would log to Sentry here.
    console.error(`[Error in ${context || 'Unknown'}]:`, error);
    
    // For validation errors or general app errors
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";

    return res.status(statusCode).json({
      success: false,
      message
    });
  }
}
