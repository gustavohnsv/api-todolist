const mongoose = require('mongoose');
const dbConfig = process.env.MONGODB_URI;

mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = mongoose.connection;