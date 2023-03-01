const spotify = require('../config/spotify');

const getPlaylist = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await spotify.getPlaylist(id);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPlaylists = async (req, res) => {
  try {
    const data = await spotify.getUserPlaylists();
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPlaylistTracks = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await spotify.getPlaylistTracks(id);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPlaylistCover = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await spotify.getPlaylistCoverImage(id);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createPlaylist = async (req, res) => {
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

const replacePlaylistTracks = async (req, res) => {
  const { id } = req.params;
  const { tracks } = req.body;
  try {
    const data = await spotify.replacePlaylistTracks(id, tracks);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPlaylistCoverImage = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await spotify.getPlaylistCoverImage(id);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

const uploadCustomPlaylistCoverImage = async (req, res) => {
  const { id } = req.params;
  const { image } = req.body;
  try {
    const data = await spotify.uploadCustomPlaylistCoverImage(id, image);
    res.status(200).json(data.body);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getPlaylist,
  getPlaylists,
  getPlaylistTracks,
  getPlaylistCover,
  createPlaylist,
  addTracksToPlaylist,
  removeTracksFromPlaylist,
  changePlaylistDetails,
  reorderPlaylistTracks,
  replacePlaylistTracks,
  getPlaylistCoverImage,
  uploadCustomPlaylistCoverImage,
};
