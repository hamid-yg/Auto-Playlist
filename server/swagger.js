const swaggerAutogen = require('swagger-autogen')();

const doc = {
  host: 'localhost:8080',
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
      url: '',
      description: 'AutoPlaylist API',
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
      password: '1234',
      created_at: '12/07/1996',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./main.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
