const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date
    },
    organizer: {
      type: String,
      required: true,
      default: ''
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    toObjects: {
      virtuals: true
    }
  }
)

const EventModel = mongoose.model('Event', EventSchema)

module.exports = {
  model: EventModel,
  schema: EventSchema
}
