const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const TemplateSchema = new Schema(
  {
    config: {
      type: Schema.Types.ObjectId,
      ref: 'TemplateConfig'
    },
    event: {
      type: String,
      required: true,
      default: ''
    },
    date: {
      type: Date
    },
    organizer: {
      type: String,
      required: true,
      default: ''
    },
    logos: [
      {
        file: {
          type: String,
          required: true,
          default: ''
        }
      }
    ],
    dignitories: [
      {
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

TemplateSchema.plugin(mongoosePaginate)

const TemplateModel = mongoose.model('Template', TemplateSchema)

module.exports = {
  model: TemplateModel,
  schema: TemplateSchema
}
