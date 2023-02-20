import React, { useState } from "react";
import "./App.css";
import Mainpage from "./components/UI/Mainpage.js";
import TodosList from "./components/UI/TodosList";
function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('logged'));
  const logInto = () => {
    setIsLogged('true');
    localStorage.setItem("logged",'true');
  };
  const logout = () => {
    setIsLogged('false');
    localStorage.setItem("logged",'false');
    localStorage.removeItem("currentlyLoggedUser");
  };

  return (
    <div className="App">
      {isLogged === 'false' && <Mainpage setLogin={logInto}></Mainpage>}
      {isLogged === 'true' && <TodosList logout={logout}></TodosList>}
    </div>
  );
}

export default App;
