const faker = require('faker');

const createPost = () => ({
  title: faker.lorem.words(3),
  body: faker.lorem.paragraphs(4),
  created: faker.date.past(),
  userId: 1
});

module.exports.seed = knex => {
  const posts = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 20; i++) {
    posts.push(createPost());
  }

  return knex('posts').insert(posts);
};
