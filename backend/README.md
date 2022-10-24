# Blogs_app backend

### About
This is a REST api which provides CRUD operations for blog entity and means for user authentication.    
Technologies used:
- Express
- Mongoose
- Jest
- Supertest
- JWT
### Setup
- Create .env file in backend folder.  
- Setup variables which are presented in .env.example file.  
  - MONGO_URI is used when you run program with npm start or npm run dev.  
  - MONGO_TEST_URI is used when you start tests with npm run test.  
  - SECRET is used for JWT token encryption    
  - PORT sets which port program is run on.  
### How to run program
- `npm install` Install npm modules after pulling some changes
- `npm run dev` Runs program with nodemon which restarts app after saving changes to source code 
- `npm start` Starts program regularly
- `npm run test` Runs unit and api tests 

### Documentation
After running the program you can find swagger documentation on `/api-docs` endpoint


