const mongoose = require('mongoose');

const { Schema } = mongoose;

const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tracks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'tracks',
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

const Playlist = mongoose.model('playlists', PlaylistSchema);

module.exports = Playlist;
