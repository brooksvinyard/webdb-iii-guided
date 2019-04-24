// what new changes we need to make
exports.up = function(knex) {
  return knex.schema.createTable('roles', function(tbl) {
      // primary key, called id and make it auto-increment
      tbl.increments();

      // Setup a column called 'name' max length of 128: It is required and unique 
      tbl.string('name', 128).notNullable().unique();
  })
};

// how to undo the changes made to the database
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('roles');
};
