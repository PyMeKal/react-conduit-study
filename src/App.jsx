import { Outlet } from "react-router";

import Header from "./components/Header";
import { useState } from "react";

function App(){
  const [token, setToken] = useState(
    () => localStorage.getItem("token")
  );

  const isLoggedIn = !!token;

  function handleLogin(newToken) {
        localStorage.setItem("token", newToken);
        setToken(newToken);
  }

  // function handleLogout() {
  //     localStorage.removeItem("token");
  //     setToken(null);
  // }


  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <Outlet context={{handleLogin}} />
    </>
  );

}


export default App;