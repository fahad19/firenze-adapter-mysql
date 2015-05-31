var Mysql = require('../index');

module.exports = {
  adapter: Mysql,
  host: process.env.FIRENZE_HOST || '127.0.0.1',
  user: process.env.FIRENZE_USER || 'root',
  password: process.env.FIRENZE_PASS || '',
  database: process.env.FIRENZE_DB || 'firenze',
  pool: {
    min: 0,
    max: 1
  }
};
