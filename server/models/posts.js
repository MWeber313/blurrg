const db = require('../data/dbConfig');

const table = 'posts';

function find() {
  return db(table);
}

function findById(id) {
  return db(table)
    .where({ id })
    .first();
}

function insert(post) {
  return db(table).insert(post);
}

function update(id, changes) {
  return db(table)
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db(table)
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};
