const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const logger = require('../utils/logger')
const User = require('../models/user')
/**
 * @swagger
 * /api/users:
 *  get:
 *    description: Get all users
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                $ref: '#/components/schemas/UserResponseBody'
 *    tags:
 *      - Users
 *  post:
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserRequestBody'
 *            
 *    responses:
 *      '201':
 *        description: Successfully created User
 *        content:
 *          application/json:
 *            schema: 
 *              $ref: '#/components/schemas/UserResponseBody'
 *      '400':
 *        description: Password or username cannot be shorter than 3 symbols
 *    tags:
 *      - Users
 */
usersRouter.post('/', async (req, res) => {
    const { username, name, password } = req.body;
    if (!password || password.length < 3)
    {
        throw new Error('bad request - Password too short');
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = new User({ username, name, passwordHash })
    const savedUser = await user.save();
    res.status(201).send(savedUser);
})

usersRouter.get('/', async (req, res) => {
    const users = await User.find({}).populate('blogs', {url:1, title:1, author:1, id:1});
    res.json(users);
})

module.exports = usersRouter;
