// what new changes we need to make
exports.up = function(knex) {
    return knex.schema.createTable('users', function(tbl) {
        // primary key, called id and make it auto-increment
        tbl.increments();
  
        // Setup a column called 'name' max length of 128: It is required and unique 
        tbl.string('name', 128).notNullable().unique();

        // foreign key
        tbl
        .integer('role_id') // the column name in this table (users)
        .unsigned()
        .references('id') // primary key in the related (parent) table (roles)
        .inTable('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  };
  
  // how to undo the changes made to the database
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  