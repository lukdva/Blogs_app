const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *  schemas:
 *    BlogBase:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          example: What use cases exist for async_hooks?
 *        author:
 *          type: string
 *          example: Joe Doe
 *        url:
 *          type: string
 *          format: uri
 *          example: https://nodejs.medium.com/what-use-cases-exist-for-async-hooks-6eab74d7eefd
 *    BlogRequestBody:
 *      required: 
 *        - title
 *        - url
 *      allOf:
 *        - $ref: '#/components/schemas/BlogBase'
 *        - type: object
 *          properties:
 *            likes:
 *              type: integer
 *              minimum: 0
 *              example: 3
 *    BlogReference:
 *      allOf:
 *        - $ref: '#/components/schemas/BlogBase'
 *        - type: object
 *          properties:
 *            id:
 *              type: string
 *              example: 632ac26bfb9507e8882f29ee
 *    BlogResponseBody:
 *      allOf:
 *        - $ref: '#/components/schemas/BlogReference'
 *        - type: object
 *          properties:
 *            likes:
 *              type: integer
 *              minimum: 0
 *              example: 3
 *            user:
 *              type: object
 *              $ref: '#/components/schemas/UserReference'
 *            comments:
 *              type: array
 *              items: 
 *                type: object
 *                $ref: '#/components/schemas/CommentReference'
 */
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
  