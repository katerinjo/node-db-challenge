const knex = require('knex');

const config = require('../knexfile.js');

const db = knex(config.development);

function allResources() {
  return db('resources').select();
}

module.exports = {
  allResources
};