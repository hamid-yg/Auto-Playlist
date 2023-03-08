const spotify = require('../config/spotify');

const use_spotify = (req, res, next) => {
  if (req.user) {
    spotify.setAccessToken(req.user.accessToken);
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = use_spotify;
