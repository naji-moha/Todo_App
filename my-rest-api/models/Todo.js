const { DataTypes } = require('sequelize');
const sequelize = require('../server/sequelize');

const Todo = sequelize.define('Todo', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Todo;
