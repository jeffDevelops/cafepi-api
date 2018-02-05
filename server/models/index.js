var Sequelize = require('sequelize');
var pwd = process.env.PWD; // require('../environment/env.js');
var sequelize;

// if (process.env.PWD) {
//   pwd = process.env.PWD;
// } else {
//   pwd = require('../environment/env.js');
// }

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
    dialect: 'mysql'
  });
} else {
  sequelize = new Sequelize('cafepi', 'root', pwd, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });
}

// sequelize = new Sequelize('cafepi', 'root', 'DMSa440!', {
//   host: 'localhost',
//   port: 3306,
//   dialect: 'mysql'
// });

sequelize.authenticate().then(() => {
  console.log(pwd);
  console.log('Established connection successfully.');
}).catch(err => {
  console.log('CONNECTION ERROR: ', err);
});

var CoffeeShop = sequelize.import('./coffeeShop');

module.exports = {
  CoffeeShop: CoffeeShop,
  sequelize: sequelize
}


