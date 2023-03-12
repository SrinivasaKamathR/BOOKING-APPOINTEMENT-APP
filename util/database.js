const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "rootuser", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
