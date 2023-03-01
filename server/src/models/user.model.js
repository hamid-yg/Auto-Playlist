const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  spotifyId: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  playlists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'playlists',
    },
  ],
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
