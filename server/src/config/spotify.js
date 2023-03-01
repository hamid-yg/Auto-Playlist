const SpotifyWebApi = require('spotify-web-api-node');

const config = require('./config');

const spotifyApi = new SpotifyWebApi({
  clientId: config.SPOTIFY_CLIENT_ID,
  clientSecret: config.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:8080/auth/spotify/callback',
});

module.exports = spotifyApi;
