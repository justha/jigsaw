## puzl
**For avid jigsaw puzzlers**
by Ha Nguyen

### About
A place for those who like to sort, organize and put things in the right place. Keeps those who like organization...organized.

### Installation and Setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Clone the repository with 'git clone'
1. Installations: 
`npm install`
`npm i --save react react-dom react-router-dom` 
`npm install json-server` 
`npm install @material-ui/core` 
`npm install @material-ui/icons` 

1. Start the development server
Open a separate terminal, `cd` into the project directory 
`npm start` to run the app in development mode
Open [http://localhost:3000](http://localhost:3000) to view in the browser.

1. Create a local API: 
'mkdir puzl-api' to create a new directory
'touch database.json' to create the database

1. Serve the JSON database: 
'cd' into the puzl-api directory
'json-server -w database.json -p 8088' 

### Features
**Gallery**
View a collection of puzzles you are working on, completed and have added to your wishlist. 
**Workspaces**
Helps you manage workspaces so you can have puzzles going everywhere they fit. Avoid starting on one, only to find that the partially assembled pieces have to be moved to a larger space. This app will help you plan your next project by perfectly matching puzzles to open workspaces. Happy puzzling! 

### Planning
ERD: [dbdiagram](https://res.cloudinary.com/djxxamywv/image/upload/v1607649209/github/dbdiagram_puzl_ylr32j.pdf) 
Wireframe: [Miro](https://res.cloudinary.com/djxxamywv/image/upload/v1607650031/github/miro_puzl_z2ge6n.png) 
