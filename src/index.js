import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Puzl } from './components/Puzl'
import './index.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Puzl />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
