const express = require('express');

const db = require('./data/dbInterface');

const server = express();

server.use(express.json());

server.post('/resources', (req, res) => {
  db.createResource(req.body)
  .then(dbRes => {
    res.status(202).send();
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to post resource' });
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

server.post('/projects', (req, res) => {
  db.createProject(req.body)
  .then(dbRes => {
    res.status(202).send();
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to post project' });
  });
});

server.get('/projects', (req, res) => {
  db.allProjects()
  .then(projects => {
    const validProjects = projects.map(proj => {
      return {...proj, completed: proj.completed === 1 };
    });
    res.json(validProjects);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

module.exports = server;