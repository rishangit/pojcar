const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cors = require('cors');

const api = require('./server/api');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(cors())

app.use('/api/', api);

app.get('*', (req, res) => {
     //res.sendFile(path.join(__dirname, '/public/index.html'));
    console.log('Url Not match')
  });


const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);


server.listen(port, () => console.log(`API running on localhost:${port}`));