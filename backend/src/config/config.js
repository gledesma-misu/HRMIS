const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'hrmis',
        user: process.env.DB_USER || 'emp',
        password: process.env.DB_PASS || 'emp',
        options: {
          dialect: process.env.DIALECT || 'sqlite',
          host: process.env.HOST || 'localhost',
          storage: path.resolve(__dirname, '../../hrmis.sqlite')
        }
      },
}