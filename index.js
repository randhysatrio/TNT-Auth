require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

(() => mongoose.connect(process.env.MONGODB_URI).then(() => console.log(`Mongoose connected successfully!`)))();

const { authRouter, userRouter } = require('./router');

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use('/', (req, res) => {
  res.send('Welcome to Tilaka Auth API!');
});

app.listen(PORT, () => console.log(`API Running at PORT: ${PORT}`));
