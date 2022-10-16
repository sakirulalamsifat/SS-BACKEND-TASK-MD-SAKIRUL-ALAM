const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Movie', 'Tv-show'],
      default: 'Movie',
    },
    genre: {
      type: String,
    },
    actor: {
      type: String,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('movies', movieSchema)
