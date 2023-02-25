const express = require('express');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerJsDoc = require('./swagger-output.json');

// const passport = require("./src/passport/passport");
const envs = require('./src/config/config');
const router = require('./src/routes/index');

const app = express();
const port = envs.port || 8080;

// require("./src/middlewares/passport.middleware");

mongoose.Promise = global.Promise;

mongoose
  .connect(envs.mongodbUri, { useNewUrlParser: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('Successfully connected to the database'))
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Could not connect to the database. Error: ', err);
    process.exit();
  });

mongoose.set('strictQuery', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: envs.secret,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: envs.mongodbUri }),
  }),
);

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
app.use('/', router);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port: ', port);
});
