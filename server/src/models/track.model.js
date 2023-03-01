const mongoose = require('mongoose');

const { Schema } = mongoose;

const TrackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  albumImage: {
    type: String,
    required: true,
  },
  spotifyId: {
    type: String,
    required: true,
  },
  playlist: {
    type: Schema.Types.ObjectId,
    ref: 'playlists',
  },
});

const Track = mongoose.model('tracks', TrackSchema);

module.exports = Track;
