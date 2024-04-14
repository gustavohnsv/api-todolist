const mongoose = require('mongoose');

let dbConfig = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.cqzzq1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso'))
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = mongoose.connection;