const express = require('express');

const playlistRouter = express.Router();
const playlistController = require('../controllers/playlist.controller');

/*
  #swagger.tags = ['Playlists']
  #swagger.summary = 'Get all playlists'
  #swagger.description = 'Get all playlists'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.responses[400] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Playlists list',
    schema: {
      data: body
    }
  }
*/
playlistRouter.get('/', playlistController.getPlaylists);

/*
  #swagger.tags = ['Playlists']
  #swagger.summary = 'Get playlist tracks'
  #swagger.description = 'Get playlist tracks'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Playlist id',
    required: true,
    type: 'string'
  }
  #swagger.responses[400] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Get playlist tracks',
    schema: {
      data: body
    }
  }
*/
playlistRouter.get('/:id', playlistController.getPlaylistTracks);

/*
  #swagger.tags = ['Playlists']
  #swagger.summary = 'Get playlist details'
  #swagger.description = 'Get playlist details'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Playlist id',
    required: true,
    type: 'string'
  }
  #swagger.responses[400] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Details of playlist',
    schema: {
      data: body
    }
  }
*/
playlistRouter.get('/:id/info', playlistController.getPlaylist);

/*
  #swagger.tags = ['Playlists']
  #swagger.summary = 'Create playlist'
  #swagger.description = 'Create playlist'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.parameters[''] = {
    in: 'body',
    description: 'Information to create playlist',
    required: true,
    type: 'array',
    example: [
      "name": "New playlist name",
      "description": "New playlist description",
      "_public": true
    ]
  }
  #swagger.responses[400] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Successfully created playlist',
    schema: {
      message: 'Successfully created playlist',
      data: body
    }
  }
*/
playlistRouter.post('/', playlistController.createPlaylist);

/*
  #swagger.tags = ['Playlists']
  #swagger.summary = 'Add tracks to playlist'
  #swagger.description = 'Add tracks to playlist'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Playlist id',
    required: true,
    type: 'string'
  }
  #swagger.parameters[''] = {
    in: 'body',
    description: 'Details to update',
    required: true,
    type: 'array',
    example: [
      "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
      "uri": "spotify:track:1301WleyT98MSxVHPZCA6M"
    ]
  }
  #swagger.responses[400] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Successfully added track to playlist',
    schema: {
      message: 'Successfully added track to playlist',
      data: body
    }
  }
*/
playlistRouter.post('/:id/add', playlistController.addTracksToPlaylist);

/*
  #swagger.tags = ['Playlists']
  #swagger.summary = 'Update playlist details'
  #swagger.description = 'Update playlist details'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Playlist id',
    required: true,
    type: 'string'
  }
  #swagger.parameters[''] = {
    in: 'body',
    description: 'Details to update',
    required: true,
    type: 'array',
    example: [
      "name": "New playlist name",
      "description": "New playlist description",
      "_public": true
    ]
  }
  #swagger.responses[400] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Playlist details updated',
    schema: {
      message: 'Playlist details updated'
    }
  }
*/
playlistRouter.put('/:id/update', playlistController.changePlaylistDetails);

/*
  #swagger.tags = ['Playlists']
  #swagger.summary = 'Remove track from playlist'
  #swagger.description = 'Remove track from playlist'
  #swagger.parameters['token'] = {
    in: 'header',
    description: 'Access token',
    required: true,
    type: 'string'
  }
  #swagger.parameters['id'] = {
    in: 'path',
    description: 'Playlist id',
    required: true,
    type: 'string'
  }
  #swagger.parameters['tracks'] = {
    in: 'body',
    description: 'Tracks to remove',
    required: true,
    type: 'array',
    example: [
      {
        uri: 'spotify:track:4iV5W9uYEdYUVa79Axb7Rh'
      },
      {
        uri: 'spotify:track:1301WleyT98MSxVHPZCA6M'
      }
    ]
  }
  #swagger.responses[400] = {
    description: 'Unauthorized',
    schema: {
      message: 'Unauthorized'
    }
  }
  #swagger.responses[200] = {
    description: 'Successfully removed',
    schema: {
      message: 'Successfully removed'
    }
  }
*/
playlistRouter.delete(
  '/:id/delete',
  playlistController.removeTracksFromPlaylist,
);

module.exports = playlistRouter;
