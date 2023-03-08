const swaggerAutogen = require('swagger-autogen')();

const doc = {
  host: 'https://auto-playlist.herokuapp.com/docs',
  info: {
    title: 'AutoPlaylist API',
    version: '1.0.0',
    description: 'AutoPlaylist API',
    termsOfService: 'http://www.github.com/blacky-yg/Auto-Playlist',
    contact: {
      name: 'Auto Team',
      url: 'http://www.github.com/blacky-yg/Auto-Playlist',
      email: '',
    },
  },
  servers: [
    {
      url: 'https://auto-playlist.herokuapp.com/docs',
      description: 'AutoPlaylist API',
    },
  ],
  tags: [
    {
      name: 'User',
      description: 'Authentication routes',
    },
    {
      name: 'Playlist',
      description: 'Playlist routes',
    },
  ],
  schemes: ['http'],
  securityDefinitions: {
    type: 'basic',
    in: 'header',
  },
  definitions: {
    User: {
      _id: 1,
      name: 'Hamidou TESSILIMI',
      email: 'hamidtessilimi@gmail.com',
      access_token: 'access_token',
      refresh_token: 'refresh_token',
    },
    Playlist: {
      _id: 1,
      name: 'Playlist name',
      description: 'Playlist description',
      _public: true,
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = [
  './main.js',
  './src/routes/index.js',
  './src/routes/playlist.router.js',
];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
