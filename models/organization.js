const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrganizationSchema = new Schema(
  {
    name: {
      type: String,
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

const OrganizationModel = mongoose.model('Organization', OrganizationSchema)

module.exports = {
  model: OrganizationModel,
  schema: OrganizationSchema
}
