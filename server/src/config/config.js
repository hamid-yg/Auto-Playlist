const dotenv = require('dotenv');

dotenv.config();

let mongodbUri = '';
let spotify_redirect_uri = '';

if (process.env.NODE_ENV === 'production') {
  mongodbUri = process.env.MONGODB_PROD;
  spotify_redirect_uri = 'https://auto-playlist.herokuapp.com/auth/spotify/callback';
} else if (process.env.NODE_ENV === 'development') {
  mongodbUri = process.env.MONGODB_LOCAL;
  spotify_redirect_uri = 'http://localhost:8080/auth/spotify/callback';
}

module.exports = {
  port: process.env.PORT,
  secret: process.env.SECRET_TOKEN,
  mongodbUri,
  SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  spotify_redirect_uri,
};
