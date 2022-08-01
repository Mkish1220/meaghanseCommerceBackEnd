require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: (...log) => console.log(log),
      pool: {
        max: 8,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const testConn = async function() {
  try {
    console.log(await sequelize.authenticate())
  }
  catch {
    console.error("error")
  }
}


console.log(testConn())
module.exports = sequelize;
