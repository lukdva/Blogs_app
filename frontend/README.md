# Blogs_app frontend

### About
This is a single page application which contains:    
- Login page
- Blog list page with new blog form
- Blog details page with comment form 
- User list page
- User details page    
Technologies used:
- React
- Redux
- Axios
- React router
- Material UI
- Cypress

### How to operate program
- Start backend project beforehand
- `npm install` Install npm modules after pulling some changes
- `npm start` Starts program regularly
- IMPORTANT! **Before running cypress tests start backend project in _test mode_**. Before each run database is cleared
  - `npm run cypress:open` Opens cypress test runner
  - `npm run cypress:run` Runs cypress tests headlessly
- `prettier --write .` runs prettier formatter throughout project
- `npm run eslint .` Checks code meets defined eslint rules 
