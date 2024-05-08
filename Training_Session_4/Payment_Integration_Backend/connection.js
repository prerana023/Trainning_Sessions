const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  'PaymentIntegration',
  'postgres',
  'database',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
