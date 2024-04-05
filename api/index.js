import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import statementRouter from './routes/statement.js';
dotenv.config();

mongoose
  .connect(process.env.MONGO_PATH)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/statements', statementRouter);
