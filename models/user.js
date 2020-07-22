const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const mongooseLeanVirtuals = require('mongoose-lean-virtuals')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    },
    // userType: {
    //   type: String,
    //   enum: ['admin', 'root'],
    //   required: true,
    //   default: 'admin'
    // }
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

UserSchema.plugin(mongoosePaginate)
UserSchema.plugin(mongooseLeanVirtuals)

const UserModel = mongoose.model('User', UserSchema)

module.exports = {
  model: UserModel,
  schema: UserSchema
}
