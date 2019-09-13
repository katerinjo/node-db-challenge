
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 32)
      .notNullable();
    tbl.string('description', 512);
    tbl.boolean('completed')
      .notNullable();
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('name', 32)
      .unique()
      .notNullable();
    tbl.string('description', 512);
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('description', 512)
      .notNullable();
    tbl.text('notes');
    tbl.boolean('completed')
      .notNullable();
    tbl.integer('project')
      .unsigned()
      .references('id')
      .inTable('projects')
      .notNullable();
  })
  .createTable('resources-projects', tbl => {
    tbl.integer('resource')
    .unsigned()
    .references('id')
    .inTable('resources')
    .notNullable();
    tbl.integer('project')
    .unsigned()
    .references('id')
    .inTable('projects')
    .notNullable();
    tbl.primary(['resource', 'project']);
  });;
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources-projects');
};
