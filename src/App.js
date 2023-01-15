import Navbar from './Navbar';
import Login from './Login';
import { useForm } from "react-hook-form";
import React from 'react';


function App() {


  return (
    <div className="App">
     <div className="content">
        
      <Navbar />
      <Login />
        </div>
    </div>
  );
}

export default App;
