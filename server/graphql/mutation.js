const graphql = require('graphql');
const Post = require('../models/posts');
const { PostType } = require('./types');

const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        body: { type: new GraphQLNonNull(GraphQLString) },
        create: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Post.insert(args)
          .then(res => {
            if (res) {
              return res;
            }
            return new Error('Post could not be created');
          })
          .catch(() => {
            return new Error('Add request could not be completed');
          });
      }
    },
    updatePost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        body: { type: new GraphQLNonNull(GraphQLString) },
        create: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Post.update(args.id, args)
          .then(res => {
            if (res) {
              return res;
            }
            return new Error('Post could not be updated');
          })
          .catch(() => {
            return new Error('Update request could not be completed');
          });
      }
    },
    removePost: {
      type: PostType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Post.remove(args.id);
      }
    }
  })
});

module.exports = Mutation;
