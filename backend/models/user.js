const mongoose = require('mongoose')

/**
 * @swagger
 * components:
 *  schemas:
 *    UserBase:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: user_991
 *          minLength: 3
 *        name:
 *          type: string
 *          example: John Wick
 *    UserRequestBody:
 *      required:
 *        - username
 *        - password
 *      allOf:
 *        - $ref: '#/components/schemas/UserBase' 
 *        - type: object
 *          properties:
 *            password:
 *              type: string
 *              format: password
 *              example: Strong**P4ssword!
 *              minLength: 3
 *    UserReference:
 *      allOf:
 *        - $ref: '#/components/schemas/UserBase'
 *        - type: object
 *          properties:
 *            id:
 *              type: string
 *              example: 632ac26bfb9507e8882f29ee 
 *    UserResponseBody:
 *      allOf:
 *        - $ref: '#/components/schemas/UserReference'
 *        - type: object
 *          properties:
 *            blogs: 
 *              type: array
 *              items:
 *                type: object
 *                $ref: '#/components/schemas/BlogReference' 
 */

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username not provided'],
      minLength: [3, 'Username too short']
    },
    passwordHash: {
      type: String,
      required: true
    },
    name: String,
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
      }
    ]
  })

  userSchema.set('toJSON', {
    transform: (doc, ret, options) => {
      ret.id = doc._id.toString();
      delete ret._id;
      delete ret.passwordHash;
      delete ret.__v;

    }
  })
 module.exports = mongoose.model('User', userSchema)