const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense", "root", "rootuser", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
