const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoDB = require('./db');

// constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// initialize the db connection + app
const app = express();

app.use(cors({
  credentials: true
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/emails', require('./routes/emails'))

mongoDB.connect(() => {
  app.listen(PORT, HOST, () => {
    console.log(`SERVER: running on http://${HOST}:${PORT}`);
  });
})


