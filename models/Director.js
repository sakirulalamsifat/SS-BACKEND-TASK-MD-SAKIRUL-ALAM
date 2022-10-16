const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema(
  {
    directorName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('directors', directorSchema)
