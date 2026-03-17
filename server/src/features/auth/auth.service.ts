import bcrypt from 'bcryptjs';
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
}
