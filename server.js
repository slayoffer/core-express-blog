require('@babel/register');
require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const indexRoutes = require('./src/routes/index.router');
const entriesRoutes = require('./src/routes/entries.router');

const { checkConnection, errorHandler } = require('./src/controllers/helpers');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/', entriesRoutes);

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  checkConnection().catch(errorHandler);
  console.log(`Express running → PORT ${server.address().port}`);
});
