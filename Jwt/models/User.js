import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

export default mongoose.model('User', userSchema);

//http://localhost:5000/api/auth/register?email=pavi@gmail.com&name=Pavi&password=1234&role=admin
