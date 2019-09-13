
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments();
    tbl.text('name', 128)
      .unique()
      .notNullable();
    tbl.text('description')
    tbl.boolean('completed')
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.text('name')
      .notNullable();
    tbl.text('description')
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.text('description')
    tbl.text('notes')
    tbl.boolean('completed')
    tbl.integer('project')
  })
  .createTable('resources-projects', tbl => {
    tbl.integer('resource')
    tbl.integer('project')
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
