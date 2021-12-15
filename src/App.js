import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import About from './routes/About';
import Login from './routes/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
