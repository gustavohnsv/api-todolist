const mongoose = require('mongoose');

if (!process.env.MONGODB_URI || process.env.MONGODB_URI.trim() === '') {
  console.error('A variável de ambiente MONGODB_URI não está definida.');
  process.exit(1); 
}

console.log(process.env.MONGODB_URI);
const dbConfig = process.env.MONGODB_URI;

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso'))
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = connection;