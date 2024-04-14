const express = require('express');
const routes = require('./routes');
const cors  = require('cors');
const { port } = require('./port');
const app = express();
require('./config/dbConfig');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});