import React from 'react';
import './App.css';
import Home from './components/Home';
import Trailer from './components/trailer/Trailer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App=()=> {
  

  return (
   
   <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/movie/:id' element={<Trailer/>}  />
      </Routes>
     </Router>
   
    
    
  );
}
export default App;