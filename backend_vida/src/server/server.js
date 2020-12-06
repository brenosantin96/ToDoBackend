require('./database');
const express = require('express');
const server = express();
const port = 3003;
const cors = require('cors');
const bodyparser = require('body-parser'); //Para mandar a requisicao em formato JSON.

server.use(bodyparser.json());
server.use(cors());

//Rotas dos todos
const todosRoute = require('../routes/todoRoutes');
server.use('/todos', todosRoute);

server.listen(port, () => {
  console.log(`Connected to Server! http://localhost:${port}`)
})



