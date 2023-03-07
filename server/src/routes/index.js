const express = require('express');
const passport = require('../config/passport');

const router = express.Router();
const spotify = require('../config/spotify');
const playlistRouter = require('./playlist.router');
const userRouter = require('./user.router');

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
    scope: [
      'user-read-email',
      'user-read-private',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify',
      'user-follow-read',
      'user-follow-modify',
    ],
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
  passport.authenticate('spotify'),
  (req, res) => {
    // res.cookie('accessToken', req.user.accessToken, { httpOnly: true });
    // spotify.setAccessToken(req.user.accessToken);
    // res.redirect('/profile');
  },
);

/*
  #swagger.summary = 'Get Spotify Profile'
  #swagger.description = 'Get Spotify Profile'
  #swagger.responses[200] = {
    description: '',
    schema: {
      message: ''
    }
  }
*/
router.get('/profile', (req, res) => {
  spotify.getMe().then((data) => {
    res.status(200).json(data.body);
  });
});

/*
  #swagger.summary = 'Logout'
  #swagger.description = 'Logout'
  #swagger.responses[200] = {
    description: '',
    schema: {
      message: ''
    }
  }
*/
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.use('/playlists', playlistRouter);

router.use('/users', userRouter);

module.exports = router;
