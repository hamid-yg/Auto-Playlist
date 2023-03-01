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

router.get('/auth/spotify', passport.authenticate('spotify'));

router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  },
);

module.exports = router;
