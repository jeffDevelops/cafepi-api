var Sequelize = require('sequelize');
var pwd = process.env.PWD || require('../environment/env.js');

var sequelize = new Sequelize('cafepi', 'root', pwd, {
  host: process.env.JAWSDB_URL || 'localhost',
  port: 3306,
  dialect: 'mysql'
});

sequelize.authenticate(function(err) {
  if (err) {
    console.log('CONNECTION ERROR: ', err);
  } else {
    console.log('Established connection successfully.');
  }
});

var CoffeeShop = sequelize.import('./coffeeShop');

module.exports = CoffeeShop;
