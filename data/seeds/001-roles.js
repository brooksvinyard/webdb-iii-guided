
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   // return knex('table_name').del()      // Change the delete to truncate
//   return knex('roles').truncate()   // Truncate will also reset the primary key 'id' and clean the date
//     .then(function () {
//       // Inserts seed entries
//       return knex('roles').insert([
//         { name: 'TA' },
//         { name : 'Student' },
//         { name: 'Staff' }
//       ]);
//     });
// };


exports.seed = function(knex) {
  return knex('roles').insert()   // Change the truncate to insert since we have the knex-cleaner
    .then(function () {
      return knex('roles').insert([
        { name: 'TA' },
        { name : 'Student' },
        { name: 'Staff' }
      ]);
    });
};