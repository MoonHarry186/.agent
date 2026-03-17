import { Response } from 'express';

export abstract class BaseController {
  protected sendSuccess(res: Response, message: string, data: any = null, status: number = 200) {
    return res.status(status).json({
      success: true,
      data,
      message,
    });
  }

  protected sendError(res: Response, message: string, status: number = 500) {
    return res.status(status).json({
      success: false,
      data: null,
      message,
    });
  }
}
