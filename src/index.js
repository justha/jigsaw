import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Jigsaw } from './components/Jigsaw'
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Jigsaw />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
