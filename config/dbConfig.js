const mongoose = require('mongoose');

if (!process.env.API_URL || process.env.API_URL.trim() === '') {
  console.error('A variável de ambiente API_URL não está definida.');
  process.exit(1); 
}

const username = encodeURIComponent(process.env.USERNAME);
const password = encodeURIComponent(process.env.PASSWORD);
let dbConfig = `mongodb+srv://${username}:${password}}@cluster0.cqzzq1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso'))
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = mongoose.connection;