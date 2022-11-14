
import './App.css';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
<Route path="/" element={<Main/>} />

  </Routes>
      </Router>
 
    </div>
  );
}

export default App;
