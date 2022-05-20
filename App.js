import React from 'react'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
