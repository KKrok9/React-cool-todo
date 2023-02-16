import React from "react";

import "./App.css";
import Mainpage from "./components/UI/Mainpage.js"
function App() {
 
  const logInto = () =>{
    localStorage.setItem('logged','true');
  }

  return <div className="App">
   {localStorage.getItem('logged')!=='true' && <Mainpage setLogin={logInto}></Mainpage>}
  </div>;
}

export default App;
