const express = require('express'),
     http = require('http'),
     bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 10;

const app = express();
const dishRouter = require('./routes/dishRouter');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/dishes', dishRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
