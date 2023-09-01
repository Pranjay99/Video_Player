import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Login from './components/Login';
import Signup  from './components/Signup';
import Upload from './components/Upload';


function App() {
  return <Router>
          <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Videos' element={<Videos />} />
      <Route path='/upload' element={<Upload />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />


    </Routes>
    <Footer />
  </Router>
}

export default App;
