const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const sequelize = require('../connection'); // Import the connection instance

const User = sequelize.define("Users", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
});

// Product table
const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false
  },
});


// Order table
const Order = sequelize.define("Order", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
});

const Payment = sequelize.define("Payment", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'id'
    }
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transaction_id: {
    type: DataTypes.STRING,
    unique: true 
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
});


Order.hasMany(Payment, { onDelete: 'CASCADE' }); 
Payment.belongsTo(Order);

module.exports = { User, Product, Order, Payment }
