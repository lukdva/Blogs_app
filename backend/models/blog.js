const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: { 
      type: Number,
      min: 0
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  })
  blogSchema.set('toJSON', {
    transform: (doc, ret, options) => {
      ret.id = doc._id;
      delete ret._id;
    }
  })
 module.exports = mongoose.model('Blog', blogSchema)
  