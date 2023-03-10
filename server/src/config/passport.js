const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

const config = require('./config');
const User = require('../models/user.model');

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
      callbackURL: config.spotify_redirect_uri,
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ spotifyId: profile.id }, (err, user) => {
        if (err) return done(err);
        if (!user) {
          const newUser = new User({
            spotifyId: profile.id,
            accessToken,
            refreshToken,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          });
          console.log(accessToken)
          newUser.save((error) => {
            if (error) console.log(error);
            return done(error, newUser);
          });
        } else return done(err, user); /* eslint consistent-return: off */
      });
    },
  ),
);

module.exports = passport;
