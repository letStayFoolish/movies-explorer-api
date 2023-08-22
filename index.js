const express = require('express');
const mongoose = require('mongoose').default;
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');
const cors = require('cors')
const helmet = require('helmet');
const {PORT, DB_ADDRESS} = require('./config');
const routes = require('./routes')
const {errors} = require("celebrate");
const errorsHandler = require('./middlewares/errorsHandler')

mongoose.connect(DB_ADDRESS, {
  useNewUrlParser: true,
})
  .then(() => console.log('Mongodb is working'))
  .catch((err) => console.error(err));

const app = express();
app.use(cors())
// Setup
app.use(helmet());
app.use(cookies());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// @todo add limiter here
// Routes
// Testing @todo remove 27-29
app.get('/', (req, res) => {
  res.json('Hello from the server');
});
app.use(routes)
// Errors
app.use(errors())
// ErrorsHandler
app.use(errorsHandler)
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
