const express = require("express");
const _server = express();
const bodyParser = require('body-parser')
const PORT = 3006;

_server.use(bodyParser.json());

_server.get('/', (req, res) => {
  res.send('Server is up and running!');
})

_server.listen(PORT, () => {
  console.log('Congrats you created a server using Express on port 3006');
});