import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from './user.model';

export class AuthService {
  async register(username: string, email: string, password: string): Promise<IUser> {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword
    });

    return await user.save();
  }

  async login(username: string, password: string): Promise<{ user: IUser; token: string }> {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '1d' }
    );

    return { user, token };
  }
}
