module.exports.up = knex =>
  knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl.string('firstName', 200).notNullable();
    tbl.string('lastName', 200).notNullable();
    tbl
      .string('email', 400)
      .unique()
      .notNullable();
    tbl
      .string('username', 200)
      .unique()
      .notNullable();
    tbl.string('password', 200).notNullable();
  });

module.exports.down = knex => knex.schema.dropTableIfExists('users');
