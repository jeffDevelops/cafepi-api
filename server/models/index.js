var Sequelize = require('sequelize');
var pwd = process.env.PWD || require('../environment/env.js');
var sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql'
  });
} else {
  sequelize = new Sequelize('cafepi', 'root', pwd, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  });
}

sequelize.authenticate(function(err) {
  if (err) {
    console.log('CONNECTION ERROR: ', err);
  } else {
    console.log('Established connection successfully.');
  }
});

var CoffeeShop = sequelize.import('./coffeeShop');

module.exports = CoffeeShop;


