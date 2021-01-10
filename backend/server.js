const express = require('express');
const mongoDB = require('./db');

// constants
const PORT = 8080;
const HOST = '0.0.0.0';

// initialize the db connection + app
const app = express();
mongoDB.connect(() => {
  app.listen(PORT, HOST, () => {
    console.log(`SERVER: running on http://${HOST}:${PORT}`);
  });
})


