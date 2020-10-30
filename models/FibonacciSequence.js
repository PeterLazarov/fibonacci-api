const Sequelize = require("sequelize");
const db = require("../config/database");

const FibonacciSequence = db.define("FibonacciSequence", {
  size: {
    type: Sequelize.INTEGER
  },
  multiplicationTable: {
    type: Sequelize.JSON,
  }
}, {
  tableName: 'FIBONACCI_SEQUENCE'
});

module.exports = FibonacciSequence;