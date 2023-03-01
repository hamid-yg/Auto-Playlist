const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const config = require('./config');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: config.SPOTIFY_CLIENT_ID,
      clientSecret: config.SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:8888/auth/spotify/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('ça marche');
      console.log(profile);
      return done(null, profile);
      // User.findOrCreate({ spotifyId: profile.id }, (err, user) => done(err, user));
    },
  ),
);

module.exports = passport;
