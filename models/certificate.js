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
      type: String,
      required: true,
      default: ''
    },
    date: { type: Date },
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
    organizer: {
      type: String,
      required: true,
      default: ''
    },
    logos: [
      {
        _id: 0,
        file: {
          type: String,
          required: true,
          default: ''
        }
      }
    ],
    dignitories: [
      {
        _id: 0,
        name: {
          type: String,
          required: true,
          default: ''
        },
        position: {
          type: String,
          required: true,
          default: ''
        }
      }
    ]
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
