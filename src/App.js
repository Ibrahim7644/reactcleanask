import React from "react";
import "./App.css";
import Main from "./Pages/Dashboard/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// for Redux

import BookNow from "./Components/BookNow/BookNow";

function App() {
  return (
    <div className="App">
     

      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route exact path="/Dashboard" element={<Main />} />

          <Route path="/BookNow" element={<BookNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
