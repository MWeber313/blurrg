const graphql = require('graphql');
const User = require('../models/user');
const Post = require('../models/posts');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    post: {
      // eslint-disable-next-line no-use-before-define
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.findByUserId(parent.id);
      }
    }
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    body: { type: new GraphQLNonNull(GraphQLString) },
    create: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      }
    }
  })
});

module.exports = {
  UserType,
  PostType
};
