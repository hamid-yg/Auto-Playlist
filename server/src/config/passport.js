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
      callbackURL: 'http://localhost:8080/auth/spotify/callback',
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
          newUser.save((error) => {
            if (error) console.log(error);
            return done(error, newUser);
          });
        } else return done(err, user);
        return done(err, user);
      });
    },
  ),
);

module.exports = passport;
