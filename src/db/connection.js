const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(porcess.env.MYSQL_URI);

sequelize.authenticate();

console.log("db connection is working");

module.express = sequelize;
