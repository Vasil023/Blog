const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  nickName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  posts: [{type: Types.ObjectId, ref: 'Post'}],
  date: {type: Date, default: Date.now}
})

module.exports = model('User', schema)