'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/name', (req, res) => {
  res.send('Hello World! This is Ekaterina Arslanbaeva emplid: 23611112');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);