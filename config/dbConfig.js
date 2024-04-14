const moongose = require('mongoose');
const dbConfig = process.env.MONGODB_URI;
const connect = moongose.connect(dbConfig)

module.exports = connect;