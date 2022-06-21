require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const { authRouter } = require('./router');

app.use('/auth', authRouter);

app.use('/', (req, res) => {
  res.send('Welcome to Tilaka Auth API!');
});

app.listen(process.env.PORT, () => console.log(`API Running at PORT: ${process.env.PORT}`));
