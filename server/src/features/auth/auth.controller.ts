import { Request, Response } from 'express';
import { BaseController } from '../../common/BaseController';
import { AuthService } from './auth.service';

export class AuthController extends BaseController {
  private authService: AuthService;

  constructor() {
    super();
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
      
      if (!username || !email || !password) {
        return this.sendError(res, 'Missing required fields', 400);
      }

      const user = await this.authService.register(username, email, password);
      
      return this.sendSuccess(res, 'User registered successfully', {
        id: user._id,
        username: user.username,
        email: user.email
      }, 201);
    } catch (error: any) {
      return this.sendError(res, error.message, 400);
    }
  }

  login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return this.sendError(res, 'Username and password are required', 400);
      }

      const { user, token } = await this.authService.login(username, password);

      return this.sendSuccess(res, 'Login successful', {
        id: user._id,
        username: user.username,
        token
      });
    } catch (error: any) {
      return this.sendError(res, error.message, 401);
    }
  }
}
