const express = require('express');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerJsDoc = require('./swagger-output.json');

const passport = require('./src/config/passport');
const config = require('./src/config/config');
const router = require('./src/routes/index');

const app = express();
const port = config.port || 8080;

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);

mongoose
  .connect(config.mongodbUri, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to the database'))
  .catch((err) => {
    console.log('Could not connect to the database. Error: ', err);
    process.exit();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: config.mongodbUri }),
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));
app.use('/', router);

app.listen(port, () => {
  console.log('Server running on port: ', port);
});
