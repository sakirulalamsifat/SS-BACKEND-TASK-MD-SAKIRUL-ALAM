// Import required stuff from graphql
const { GraphQLSchema, GraphQLObjectType } = require('graphql')

// Import queries
const {
  users,
  user,
  director,
  directors,
  actor,
  actors,
  producer,
  producers,
  movie,
  movies,
} = require('./queries')

// Import mutations
const { register, login, addMovies } = require('./mutations')

// Define QueryType
const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'Queries',
  fields: {
    users,
    user,
    director,
    directors,
    actor,
    actors,
    producer,
    producers,
    movie,
    movies,
  },
})

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'Mutations',
  fields: {
    register,
    login,
    addMovies,
  },
})

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})
