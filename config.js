require('dotenv').config();

// http://localhost:3000
// @todo PORT = 3000
const { PORT = '5000' } = process.env;
const { DB_ADDRESS = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;
// JWT_SECRET_KEY

module.exports = {
  PORT,
  DB_ADDRESS,
  // JWT_SECRET_KEY
};
