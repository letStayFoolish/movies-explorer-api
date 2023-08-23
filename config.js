require('dotenv').config();

const { PORT = '3000' } = process.env;
const { DB_ADDRESS = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;
// JWT_SECRET_KEY

module.exports = {
  PORT,
  DB_ADDRESS,
  // JWT_SECRET_KEY
};
