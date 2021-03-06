const Sequelize = require('sequelize')
const db = require('../db')

const OrderSummary = db.define('orderSummary', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  },
  priceAtCheckOut: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
})

module.exports = OrderSummary
