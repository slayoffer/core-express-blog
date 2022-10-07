const { sequelize } = require('../../db/models');

async function checkConnection() {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
}

function errorHandler(err) {
  console.log('We got an error!');
  console.log(err);
}

function catchErrors(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
}

module.exports = { checkConnection, catchErrors, errorHandler };
