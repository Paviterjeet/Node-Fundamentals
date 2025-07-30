import express from 'express';
import { register, login, refreshToken } from '../controllers/authController.js';
import { protect, authorizeRoles } from '../middleware/authMiddleware.js';
import { limiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.post('/register', limiter, register);
router.post('/login', limiter, login);
router.post('/refresh', refreshToken);
router.get('/admin', protect, authorizeRoles('admin'), (req, res) => {
  res.send('Welcome Admin');
});

export default router;