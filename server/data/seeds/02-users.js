const bcrypt = require('bcryptjs');

module.exports.seed = knex => {
  return knex('users').insert({
    firstName: 'Jason',
    lastName: 'Loomis',
    email: 'jason@jrloomis.com',
    username: 'jrloom',
    password: bcrypt.hashSync('1234')
  });
};
