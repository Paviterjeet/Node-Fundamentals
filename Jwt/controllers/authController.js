import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { generateTokens } from '../utils/generateTokens.js';

export const register = async (req, res) => {
  console.log(req.body);
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, role });
  await user.save();
  res.status(201).json({ message: 'User registered' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const tokens = generateTokens(user);
  res.json(tokens);
};

export const refreshToken = (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
    const tokens = generateTokens(decoded);
    res.json(tokens);
  } catch {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
};