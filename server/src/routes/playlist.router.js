const express = require('express');

const playlistRouter = express.Router();
const playlistController = require('../controllers/playlist.controller');

/*
  #swagger.summary = 'Get all playlists'
  #swagger.description = 'Get all playlists'
  #swagger.responses[200] = {
    description: '',
    schema: {
      message: ''
    }
  }
*/
playlistRouter.get('/', playlistController.getPlaylists);

/*
  #swagger.summary = 'Get playlist by id'
  #swagger.description = 'Get playlist by id'
  #swagger.responses[200] = {
    description: '',
    schema: {
      message: ''
    }
  }
*/
playlistRouter.get('/:id', playlistController.getPlaylist);

/*
  #swagger.summary = 'Create playlist'
  #swagger.description = 'Create playlist'
  #swagger.responses[200] = {
    description: '',
    schema: {
      message: ''
    }
  }
*/
playlistRouter.post('/', playlistController.createPlaylist);

/*
  #swagger.summary = 'Update playlist'
  #swagger.description = 'Update playlist'
  #swagger.responses[200] = {
    description: '',
    schema: {
      message: ''
    }
  }
*/
// playlistRouter.put('/:id', playlistController.updatePlaylist);

/*
  #swagger.summary = 'Delete playlist'
  #swagger.description = 'Delete playlist'
  #swagger.responses[200] = {
    description: '',
    schema: {
      message: ''
    }
  }
*/
// playlistRouter.delete('/:id', playlistController.deletePlaylist);

module.exports = playlistRouter;
