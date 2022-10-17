const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} = require("graphql")

const { User, Producer, Actor, Director,Movies } = require("../models")

const UserType = new GraphQLObjectType({
  name: "User",
  description: "User type",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
  }),
})

const ProducerType = new GraphQLObjectType({
  name: "Producer",
  description: "Producer type",
  fields: () => ({
    id: { type: GraphQLID },
    producerName: { type: GraphQLString },
    gender: { type: GraphQLString },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return Movies.find({ producer: parent.id })
      },
    },
  }),
})

const DirectorType = new GraphQLObjectType({
  name: "Director",
  description: "Director type",
  fields: () => ({
    id: { type: GraphQLID },
    directorName: { type: GraphQLString },
    gender: { type: GraphQLString },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return Movies.find({ director: parent.id })
      },
    },
  }),
})


const ActorType = new GraphQLObjectType({
  name: "Actor",
  description: "Actor type",
  fields: () => ({
    id: { type: GraphQLID },
    actorName: { type: GraphQLString },
    gender: { type: GraphQLString },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return Movies.find({ acotr: parent.id })
      },
    },
  }),
})

const MovieType = new GraphQLObjectType({
  name: "Movie",
  description: "Movie type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    genre: { type: GraphQLString },
    duration: { type: GraphQLString },
    actor: {
      type: ActorType,
      resolve(parent, args) {
        return Actor.findById(parent.userId)
      },
    },
    producer: {
      type: ProducerType,
      resolve(parent, args) {
        return Producer.findById(parent.userId)
      },
    },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return Director.findById(parent.userId)
      },
    }
  }),
})
module.exports = { UserType, ProducerType, DirectorType, ActorType,MovieType }
