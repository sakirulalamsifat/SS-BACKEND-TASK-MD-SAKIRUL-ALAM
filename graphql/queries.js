const { GraphQLList, GraphQLID } = require("graphql")
const { UserType, DirectorType, ProducerType, ActorType, MovieType } = require("./types")
const { User, Director, Actor, Movies, Producer } = require("../models")

const users = {
  type: new GraphQLList(UserType),
  description: "Retrieves list of users",
  resolve(parent, args) {
    return User.find()
  },
}

const user = {
  type: UserType,
  description: "Retrieves one user",
  args: { id: { type: GraphQLID } },

  resolve(parent, args) {
    return User.findById(args.id)
  },
}

const movies = {
  type: new GraphQLList(MovieType),
  description: "Retrieves list of movies",
  resolve() {
    return Movies.find()
  },
}

const movie = {
  type: MovieType,
  description: "Retrieves one Movie",
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return Movies.findById(args.id)
  },
}
const producers = {
  type: new GraphQLList(ProducerType),
  description: "Retrieves list of producers",
  resolve() {
    return Producer.find()
  },
}

const producer = {
  type: ProducerType,
  description: "Retrieves one producer",
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return Producer.findById(args.id)
  },
}

const directors = {
  type: new GraphQLList(DirectorType),
  description: "Retrieves list of directors",
  resolve() {
    return Director.find()
  },
}

const director = {
  type: DirectorType,
  description: "Retrieves one director",
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return Director.findById(args.id)
  },
}

const actors = {
  type: new GraphQLList(ActorType),
  description: "Retrieves list of actors",
  resolve() {
    return Actor.find()
  },
}

const actor = {
  type: ActorType,
  description: "Retrieves one actor",
  args: { id: { type: GraphQLID } },
  resolve(_, args) {
    return Actor.findById(args.id)
  },
}

module.exports = { users, user, director, directors, actor, actors, producer, producers, movie, movies}
