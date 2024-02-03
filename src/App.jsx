import { useState } from "react";
import bookLogo from "./assets/books.png";
import { Routes, Route } from "react-router-dom";


import NavBar from "./components/Navigations";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Register from "./components/Register"; 
import Account from "./components/Account"; 
import Login from "./components/Login"; 

function App() {
  const [token, setToken] = useState(null);

  return (
    <>

      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <NavBar />
      
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<SingleBook token={token}/>} />
        <Route path="/users/register" element={<Register setToken={setToken} />} />
        <Route path="/users/login" element={<Login setToken={setToken}/>} />
        <Route path="/users/me" element={<Account token={token}/>} />
      </Routes>


    </>
  );
}

export default App;

//Demo 28, react router
