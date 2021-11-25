import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Index from "./view/index"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={Index()}/>
        </Routes>
        <div>
            <p>首页</p>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;