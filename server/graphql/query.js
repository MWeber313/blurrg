const graphql = require('graphql');
const Post = require('../models/posts');
const { PostType } = require('./types');

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllPosts: {
      type: new GraphQLList(PostType),
      resolve() {
        return Post.find()
          .then(res => {
            if (res.length) {
              return res;
            }
            return new Error('Posts could not be found');
          })
          .catch(() => {
            return new Error('Error finding posts');
          });
      }
    },
    getPostById: {
      type: PostType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Post.findById(args.id)
          .then(res => {
            if (res) {
              return res;
            }
            return new Error('Post ID could not be found');
          })
          .catch(() => {
            return new Error('Error finding post by ID');
          });
      }
    }
  }
});

module.exports = RootQuery;
