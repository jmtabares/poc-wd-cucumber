//const dotenv = require('dotenv');
import dotenv = require('dotenv');
dotenv.config();
module.exports = {
  base_url: process.env.BASE_URL,
};
