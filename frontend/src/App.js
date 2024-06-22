import logo from './logo.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Create from './Create/Create'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element={<Create />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
