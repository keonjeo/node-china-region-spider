const sequelize = require('../database.js')
const Sequelize = require('sequelize')

const Province = sequelize.define('provinces', {
  year: {
    type: Sequelize.INTEGER,
    unique: 'compositeIndex'
  },
  name: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING,
    unique: 'compositeIndex'
  },
  url: {
    type: Sequelize.STRING
  },
  citiesCount: {
    type: Sequelize.INTEGER
  }
});

// force: true 如果表已经存在，将会丢弃表
Province.sync({force: false})

module.exports = Province
