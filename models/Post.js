const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  title: {type: String, required: true},
  descr: {type: String, required: true},
  data: {type: Date, default: Date.now},
  posts: [{type: Types.ObjectId, ref: 'Post'}]
})

module.exports = model('Post', schema)