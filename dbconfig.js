require('dotenv').config()
const db = require('knex')({
    client: 'pg',
    connection: {
      connectionString : 'postgresql-colorful-03306',
      ssl: true
    }
});


module.exports = db