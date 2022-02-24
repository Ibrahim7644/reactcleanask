import React, { useState } from "react";
import "./App.css";
import Main from "./Pages/Dashboard/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// for Redux

import { useDispatch, useSelector } from "react-redux";
import { addBird, incrementBird } from "./Store/birds";

function App() {
  const [birdName, setBird] = useState("");
  const birds = useSelector((state) => state.birds);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBird(birdName));
    setBird("");
  };

  return (
    <div className="App">
      {/* shows data of store  */}
      <div
        className="wrapper"
        style={{ border: "2px solid red", textAlign: "left" }}
      >
        <h1>Bird List</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Add Bird</p>
            <input
              type="text"
              onChange={(e) => setBird(e.target.value)}
              value={birdName}
            />
          </label>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <ul>
          {birds.map((bird) => (
            <li key={bird.name}>
              <h3>{bird.name}</h3>
              <div>
                Views: {bird.views}
                <button onClick={() => dispatch(incrementBird(bird.name))}>
                  <span role="img" aria-label="add">
                    ➕
                  </span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <hr />

      {/* End data of store  */}

      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route exact path="/Dashboard" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
