const express = require('express')
const app = express()
require('express-async-errors');
const {MONGO_URI} = require('./utils/config')
const mongoose = require('mongoose')
const cors = require('cors')
const blogRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const {info, error} = require('./utils/logger');
const middleware = require('./utils/middleware');
const testingRouter = require('./controllers/testing');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger')

info('connecting to MongoDB')

mongoose.connect(MONGO_URI)
.then(() => {
    info('connected to mongoDB')
})
.catch(err => {
    error('error connecting to MongoDB: ', err);
})

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/testing', testingRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(middleware.handleBadRequests);

module.exports = app;