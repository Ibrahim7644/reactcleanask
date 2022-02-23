import logo from './logo.svg';
import './App.css';
import Main from './Pages/Dashboard/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Pages/Login/Login';

// for services

import { useState } from 'react';
import { getTodos } from './Services/Index'
import { useEffect } from "react";


// Redux and Reducer

import store from './Redux/Store';

    
// store.dispatch({
//   type: "bugAdded",
//   payload: {
//     discription: "Bug1"
//   }
// });
// store.dispatch({
//   type: "bugRemoved",
//   payload: {
//     id: 1
//   }
// });


function App() {

  const [serviceData, setServiceData] = useState();

  useEffect(() => {
    getTodos().then((res) => setServiceData(res.data));
  }, [])


  console.log("store getstate is", store.getState())
  console.log("store is", store)
  return (
    <div className="App">

      <Login />

      {/* <h1>Service Result</h1>
      <hr />
      <ul>
        {
          serviceData.map((data => (
            <li key={data.id}>
            Title: {data.title},
            <br/>
            userid : {data.userId}
            <br/>
            completed : {data.completed ? "true" : "false"}
            <hr/>
             </li>
          )))
        }

      </ul> */}
    </div>
  );
}

export default App;
