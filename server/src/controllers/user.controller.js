const User = require('../models/user.model');
const spotify = require('../config/spotify');

const getProfile = (req, res) => {
  User.findById(req.user._id).then((user) => {
    res.status(200).json(user);
  });
};

module.exports = {
  getProfile,
};
