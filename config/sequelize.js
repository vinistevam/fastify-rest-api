const Sequelize = require('sequelize');

// Configure the options for each environment
const options = {
  development: {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './db.development.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    use_env_variable: 'DATABASE_URL',
  },
};

// Create a new instace of Sequelize
const sequelize = new Sequelize(options.development);

module.exports = sequelize;
