# puzl
**Organization for avid jigsaw puzzlers** <br/>
created by Ha Nguyen

## About
A place for those who like to sort, organize and put things in the right place. Keeps those who like organization...organized.

## Planning
Wireframe: [Miro](https://res.cloudinary.com/djxxamywv/image/upload/v1607650031/github/miro_puzl_z2ge6n.png) <br />
ERD: [dbdiagram](https://res.cloudinary.com/djxxamywv/image/upload/v1607700885/github/dbdiagram_puzl_yd9pdu.png) <br />

## Installation and Setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br/>

This project uses integrated image management services by [Cloudinary](https://github.com/cloudinary/cloudinary-react). <br/>

1. Clone the repository with 'git clone'
1. Installations: <br />
`npm install` <br />
`npm i --save react react-dom react-router-dom` <br />
`npm install json-server` <br />
`npm install @material-ui/core` <br />
`npm install @material-ui/icons` <br />
`npm install cloudinary-react --save` <br />

1. Start the development server<br />
Open a separate terminal, `cd` into the project directory <br />
Run `npm start` to view the app in development mode <br />
Open [http://localhost:3000](http://localhost:3000) to view in the browser <br /> 
The page will reload if you make edits. <br />
You will also see any lint errors in the console. <br />

1. Create a local API: <br />
`mkdir puzl-api` to create a new directory <br />
`touch database.json` to create the database <br />

1. Serve the JSON database: <br />
`cd` into the puzl-api directory <br />
`json-server -w database.json -p 8088` <br />

## Features
**Gallery** <br />
View a collection of puzzles you are working on, completed and have added to your wishlist. <br />
<br/>
**Workspaces** <br />
Helps you manage workspaces so you can have puzzles going everywhere they fit. Avoid starting on one, only to find that the partially assembled pieces have to be moved to a larger space. This app will help you plan your next project by perfectly matching puzzles to open workspaces. Happy puzzling! <br />
<!-- **Stats**
Displays your puzzle productivity and history
**Sample Screen Shots** -->
