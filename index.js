const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');
const helmet = require('helmet');
const { PORT, DB_ADDRESS } = require('./config');
// const { errors } = require("celebrate");

mongoose.connect(DB_ADDRESS, {
  useNewUrlParser: true,
})
  .then(() => console.log('Mondodb is working'))
  .catch((err) => console.error(err));

const app = express();
// Setup
app.use(helmet());
app.use(cookies());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json('Hello from the server');
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
