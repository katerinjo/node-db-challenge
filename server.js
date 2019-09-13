const express = require('express');

const db = require('./data/dbInterface');

const server = express();

server.use(express.json());

server.post('/resources', (req, res) => {
  db.createResource(req.body)
  .then(dbRes => {
    res.status(202);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

server.get('/resources', (req, res) => {
  db.allResources()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

module.exports = server;