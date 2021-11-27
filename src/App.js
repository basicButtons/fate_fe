import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import IndexRoute from "./router"
function App() {

  return (
    <div>
      <BrowserRouter>
        {IndexRoute()}
      </BrowserRouter>
    </div>
  );
}

export default App;