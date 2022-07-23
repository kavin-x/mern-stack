import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const sendValue = () => {
    Axios.post("http://localhost:3001/insert", {
      user: name,
      password: password,
    });
  };

  return (
    <div className="container">
      <h1>CRUD application</h1>
      <label>Enter the name</label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Enter the Password</label>
      <input
        type="number"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={sendValue}>Add user</button>
    </div>
  );
}

export default App;
