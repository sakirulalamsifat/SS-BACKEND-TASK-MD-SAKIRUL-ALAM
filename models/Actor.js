const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema(
  {
    actorName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('actors', actorSchema)
