const mongoose = require('mongoose')
/**
 * @swagger
 * components:
 *  schemas:
 *    CommentBase:
 *      required: 
 *        - content
 *      type: object
 *      properties:
 *        content:
 *          type: string
 *          example: This was so helpful.
 *    CommentReference:
 *      allOf:
 *        - $ref: '#/components/schemas/CommentBase'
 *        - type: object
 *          properties:
 *            id:
 *              type: string
 *              example: 632ac26bfb9507e8882f29ee
 *    CommentResponse:
 *      allOf:
 *        - $ref: '#/components/schemas/CommentReference'
 *        - type: object
 *          properties:
 *            blog:
 *              $ref: '#/components/schemas/BlogReference'
 */
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