const spotify = require('../config/spotify');

const getTopTracks = (req, res) => {
  spotify.getMyTopTracks().then((data) => {
    res.status(200).json(data.body);
  });
}

const getTopArtists = (req, res) => {
  spotify.getMyTopArtists().then((data) => {
    res.status(200).json(data.body);
  });
}

const getRecentlyPlayed = (req, res) => {
  spotify.getMyRecentlyPlayedTracks().then((data) => {
    res.status(200).json(data.body);
  });
}

module.exports = {
  getProfile,
  getTopTracks,
  getTopArtists,
  getRecentlyPlayed,
};
