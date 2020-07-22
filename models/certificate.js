const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const CertificateSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: ''
    },
    template: {
      type: Schema.Types.ObjectId,
      ref: 'Template'
    },
    type: {
      type: String,
      required: true,
      default: ''
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    },
    awardee: [
      {
        name: {
          type: String,
          required: true,
          default: ''
        },
        email: {
          type: String,
          required: true,
          default: ''
        }
      }
    ],
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

CertificateSchema.plugin(mongoosePaginate)

const CertificateModel = mongoose.model('Certificate', CertificateSchema)

module.exports = {
  model: CertificateModel,
  schema: CertificateSchema
}
