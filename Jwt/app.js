import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/api/protected',(req,res)=>{
    res.send("JWT AUTH")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// {
//     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTM3NjgxNTksImV4cCI6MTc1Mzc2ODQ1OX0.VFdhguBlbps3baI3e3BWbr8yyI2bdt1WG0qSCkL4NqA",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTM3NjgxNTksImV4cCI6MTc1NDM3Mjk1OX0.SukR10mUW17-SAvrKQ8rkU9RVbzTUr-2cCECl7-dZbs"
// }