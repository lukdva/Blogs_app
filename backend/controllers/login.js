const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

/**
 * @swagger
 * /api/login:
 *  post:
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                username: 
 *                  type: string
 *                  minLength: 3
 *                  example: User_780
 *                password:
 *                  type: string
 *                  format: password
 *                  example: Strong**P4ssword!
 *      responses:
 *        '200':
 *          description: Token successfully generated
 *          content:
 *            application/json:
 *              schema: 
 *                $ref: '#/components/schemas/BlogResponseBody'
 *        '401':
 *          description: Invalid username or password
 *      tags:
 *        - Login
 */
loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter;