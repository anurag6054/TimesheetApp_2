const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
  port = process.env.PORT || 3000;
  const mysql = require('mysql');
  const cors = require('cors');
// require('./config/passport');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'psa_db1'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
const JWT_Secret = 'your_secret_key';

var routes = require('./app/routes/userRoutes');
var routes = require('./app/routes/psaRoutes');
var routes = require('./app/routes/workRoutes');

routes(app); 