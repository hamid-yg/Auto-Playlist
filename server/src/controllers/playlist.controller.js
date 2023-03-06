const spotify = require('../config/spotify');

const getPlaylist = async (req, res) => {
  const { id } = req.params;
  try {
    spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
    const data = await spotify.getPlaylist(id);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPlaylists = async (req, res) => {
  try {
    spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
    const data = await spotify.getUserPlaylists();
    res.status(200).json(data.body);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getPlaylistTracks = async (req, res) => {
  spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
  const { id } = req.params;
  try {
    const data = await spotify.getPlaylistTracks(id);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createPlaylist = async (req, res) => {
  spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
  const { name, description, _public } = req.body;
  try {
    const data = await spotify.createPlaylist(name, {
      description,
      _public,
    });
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const addTracksToPlaylist = async (req, res) => {
  spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
  const { id } = req.params;
  const { tracks } = req.body;
  try {
    const data = await spotify.addTracksToPlaylist(id, tracks);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const removeTracksFromPlaylist = async (req, res) => {
  spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
  const { id } = req.params;
  const { tracks } = req.body;
  try {
    const data = await spotify.removeTracksFromPlaylist(id, tracks);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const changePlaylistDetails = async (req, res) => {
  spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
  const { id } = req.params;
  const { name, description, _public } = req.body;
  try {
    const data = await spotify.changePlaylistDetails(id, {
      name,
      description,
      _public,
    });
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const reorderPlaylistTracks = async (req, res) => {
  spotify.setAccessToken(req.headers.authorization.split(' ')[1]);
  const { id } = req.params;
  const { range_start, range_length, insert_before } = req.body;
  try {
    const data = await spotify.reorderPlaylistTracks(
      id,
      range_start,
      range_length,
      insert_before,
    );
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getPlaylist,
  getPlaylists,
  getPlaylistTracks,
  createPlaylist,
  addTracksToPlaylist,
  removeTracksFromPlaylist,
  changePlaylistDetails,
  reorderPlaylistTracks,
};
