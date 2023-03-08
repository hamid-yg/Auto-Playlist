const express = require('express');

const router = express.Router();

const User = require('../models/user.model');
const spotify = require('../config/spotify');
const passport = require('../config/passport');
const playlistRouter = require('./playlist.router');

/*
  #swagger.tags = ['Main']
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
  #swagger.tags = ['Authentication']
  #swagger.summary = 'Spotify Auth'
  #swagger.description = 'Spotify Auth'
  #swagger.responses[200] = {
    schema: {
      message: 'Redirecting to Spotify...'
    }
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
  #swagger.tags = ['User']
  #swagger.summary = 'Spotify Auth Callback'
  #swagger.description = 'Spotify Auth Callback'
  #swagger.responses[200] = {
    schema: {
      message: 'Redirecting to dashboard...'
    }
  }
*/
router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify'),
  (req, res) => {
    spotify.setAccessToken(req.user.accessToken);
    res.redirect('http://auto-playlist.vercel.app/dashboard');
  },
);

/*
  #swagger.tags = ['User']
  #swagger.summary = 'Get Spotify Profile'
  #swagger.description = 'Get Spotify Profile'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.responses[401] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Spotify Profile',
    schema: {
      message: 'Spotify Profile',
      data: body
    }
  }
*/
router.get('/profile', (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    spotify.setAccessToken(token);
    User.findOne({ accessToken: token }).then((user) => {
      if (!user) {
        res.status(401).json({ message: 'Unauthorized' });
      }
      spotify.getMe().then((data) => {
        res.status(200).json({ message: 'Spotify Profile', data: data.body, user: user });
      }).catch((error) => {
        res.status(401).json({ message: 'Unauthorized', error: error });
      });
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

/*
  #swagger.tags = ['User']
  #swagger.summary = 'Logout'
  #swagger.description = 'Logout'
  #swagger.responses[200] = {
    description: 'Logout',
    schema: {
      message: 'Successfully logged out'
    }
  }
*/
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

/*
  #swagger.tags = ['Playlist']
  #swagger.summary = 'All Routes'
  #swagger.description = 'All Routes'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.responses[401] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
*/
router.use(
  '/playlists',
  (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      spotify.setAccessToken(token);
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  },
  playlistRouter,
);

module.exports = router;
