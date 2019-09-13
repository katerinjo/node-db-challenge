const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

function allResources() {
  return db('resources').select();
}

function createResource(dat) {
  return db('resources').insert(dat);
}

function createProject(dat) {
  const validDat = {...dat};
  validDat.completed = validDat.completed || false;
  console.log('validDat', validDat)
  return db('projects').insert(validDat);
}

function allProjects() {
  return db('projects').select();
}

module.exports = {
  allResources,
  createResource,
  createProject,
  allProjects
};