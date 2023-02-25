const dotenv = require('dotenv');

dotenv.config();

let mongodbUri = '';

if (process.env.NODE_ENV === 'production') mongodbUri = process.env.MONGODB_PROD;
else if (process.env.NODE_ENV === 'development') mongodbUri = process.env.MONGODB_LOCAL;

module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET_TOKEN,
  mongodbUri,
};
