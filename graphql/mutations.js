const { UserType, ProducerType, DirectorType, ActorType,MovieType } = require("./types")

const { User, Director, Producer, Actor, Movies } = require("../models")
const { GraphQLString, GraphQLBoolean } = require("graphql")

const { createJwtToken } = require("../util/auth")

const register = {
  type: GraphQLString,
  description: "Register new user",
  args: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
  },
  async resolve(parent, args) {
    const { username, email, password,isAdmin } = args
    const user = new User({ username, email, password, isAdmin })
    const generateTokenUser = {_id:user._id,username:user.username,email:user.email,isAdmin:user.isAdmin}

    await user.save()
    const token = createJwtToken(generateTokenUser)
    return token
  },
}

const login = {
  type: GraphQLString,
  description: "Login user",
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = await User.findOne({ email: args.email }).select("+password")
    const generateTokenUser = {_id:user._id,username:user.username,email:user.email,isAdmin:user.isAdmin}
    console.log(user)
    if (!user || args.password !== user.password) {
      throw new Error("Invalid credentials")
    }

    const token = createJwtToken(generateTokenUser)
    return token
  },
}

const addMovies = {
  type: MovieType,
  description: "Create new movie",
  args: {
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    genre: { type: GraphQLString },
    actor: { type: GraphQLString },
    producer: { type: GraphQLString },
    director: { type: GraphQLString },
    duration: { type: GraphQLString },
  },
  resolve(parent, args, { verifiedUser }) {
    console.log("Verified User: ", verifiedUser)
    if (!verifiedUser) {
      throw new Error("Unauthorized")
    }

    const movie = new Movies({
      name: args.name,
      type: args.type,
      genre: args.genre,
      actor: args.actor,
      producer: args.producer,
      director: args.director,
      duration: args.duration,
    })

    return movie.save()
  },
}



module.exports = {
  register,
  login,
  addMovies,

}
