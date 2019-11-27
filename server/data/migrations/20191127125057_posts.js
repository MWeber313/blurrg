module.exports.up = knex =>
  knex.schema.createTable('posts', tbl => {
    tbl.increments('id');
    tbl.string('title', 300);
    tbl.text('body').notNullable();
    tbl.timestamp('created').defaultTo(knex.fn.now());
    tbl
      .integer('userId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
  });

module.exports.down = knex => knex.schema.dropTableIfExists('posts');
