const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: String,
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  })
  commentSchema.set('toJSON', {
    transform: (doc, ret, options) => {
      ret.id = doc._id;
      delete ret._id;
    }
  })
 module.exports = mongoose.model('Comment', commentSchema)