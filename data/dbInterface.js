const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

function allResources() {
  return db('resources').select();
}

function createResource(dat) {
  return db('resources').insert(dat);
}

module.exports = {
  allResources,
  createResource
};