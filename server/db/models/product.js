const Sequlize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequlize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequlize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequlize.INTEGER,
    allowNull: false
  },
  imgUrl: {
    type: Sequlize.STRING,
    defaultValue: 'defaultImg.jpg'
  },
  stock: {
    type: Sequlize.INTEGER
  },
  tag: {
    type: Sequlize.STRING
  }
})

module.exports = Product
