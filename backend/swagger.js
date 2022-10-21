const swaggerJsdoc = require("swagger-jsdoc");
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 * security:
 *  - bearerAuth: []
 */

 const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Blogs REST API',
        version: '1.0.0',
      },
    },
    apis: ['./models/*', './controllers/*', 'swagger.js'],
  };
const specs = swaggerJsdoc(options);

module.exports = specs;