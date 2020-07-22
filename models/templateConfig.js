const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const TemplateConfigSchema = new Schema(
  {
    backgroundFile: {
      type: String,
      required: true,
      default: ''
    },
    sampleFile: {
      type: String,
      required: true,
      default: ''
    },
    event: {
      x: Number,
      y: Number,
      w: Number,
      h: Number
    },
    date: {
      x: Number,
      y: Number,
      w: Number,
      h: Number
    },
    organizer: {
      x: Number,
      y: Number,
      w: Number,
      h: Number
    },
    logos: [
      {
        x: Number,
        y: Number,
        w: Number,
        h: Number
      }
    ],
    dignitories: [
      {
        x: Number,
        y: Number,
        w: Number,
        h: Number
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

TemplateConfigSchema.plugin(mongoosePaginate)

const TemplateConfigModel = mongoose.model(
  'TemplateConfig',
  TemplateConfigSchema
)

module.exports = {
  model: TemplateConfigModel,
  schema: TemplateConfigSchema
}
