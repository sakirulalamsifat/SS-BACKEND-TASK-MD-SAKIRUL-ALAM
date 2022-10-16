const mongoose = require('mongoose')

const producerSchema = new mongoose.Schema(
  {
    producerName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('producers', producerSchema)
