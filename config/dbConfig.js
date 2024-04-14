const mongoose = require('mongoose');

if (!process.env.API_URL || process.env.API_URL.trim() === '') {
  console.error('A variável de ambiente API_URL não está definida.');
  process.exit(1); 
}

const dbConfig = process.env.API_URL

mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso'))
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = mongoose.connection;