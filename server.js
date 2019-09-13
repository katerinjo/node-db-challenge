const express = require('express');

const db = require('./data/dbConfig');

const server = express();

server.use(express.json());

server.get('/resources', (req, res) => {
  db.find()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

module.exports = server;