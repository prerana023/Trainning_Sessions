const { User, Product, Order, Payment } = require('./Model/models');

(async () => {
  try {
    // User.sync()
    // Product.sync()
    // Order.sync()
    Payment.sync()
    // await sequelize.sync({ force: true }); 
    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Unable to create tables:', error);
  }
})();