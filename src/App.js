import React from "react";
import "./App.css";
import Mainpage from "./components/UI/Mainpage.js"
import TodosList from "./components/UI/TodosList";
function App() {
 
  const logInto = () =>{
    localStorage.setItem('logged','true');
  }

  return <div className="App">
   {localStorage.getItem('logged')!=='true' && <Mainpage setLogin={logInto}></Mainpage>}
   {localStorage.getItem('logged')==='true' && <TodosList></TodosList>}
  </div>;
}

export default App;
