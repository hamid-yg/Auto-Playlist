const express = require('express');
const passport = require('../config/passport');

const router = express.Router();

/*
  #swagger.summary = 'Main Route'
  #swagger.description = 'Main Route'
  #swagger.responses[200] = {
    description: 'The server is running successfully!',
    schema: {
      message: 'The server is running successfully!'
    }
  }
*/
router.get('/', (req, res) => res.status(200).json({ message: 'The server is running successfully!' }));

/*
  #swagger.summary = 'Spotify Auth'
  #swagger.description = 'Spotify Auth'
  #swagger.responses[200] = {

  }
*/
router.get(
  '/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
  }),
);

/*
  #swagger.summary = 'Spotify Auth Callback'
  #swagger.description = 'Spotify Auth Callback'
  #swagger.responses[200] = {

  }
*/
router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/profile');
  },
);

router.get('/profile', (req, res) => {
  res.status(200).json({ message: 'I got the profile!' });
});

module.exports = router;
