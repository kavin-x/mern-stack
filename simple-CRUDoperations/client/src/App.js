import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [newUserName,setnewUserName]=useState('');
  const sendValue = () => {
    Axios.post("http://localhost:3001/insert", {
      user: name,
      password: password,
    });
  };

  const updateUsername = (id) => {
    Axios.put("http://localhost:3001/updateUser", {
      id: id,
      newUserName: newUserName,
    });
  };
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)

  };
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

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
      <div className="displayUsers">
        {listOfUsers.map((user, i) => {
          return (
            <div key={i}>
              <h1>{user.user}</h1>
              <h1>{user.password}</h1>
              <input
                type="text"
                onChange={(event) => {
                  setnewUserName(event.target.value);
                }}
              />
              <button onClick={()=>updateUsername(user._id)}>Update user</button>
              <button onClick={()=>deleteUser(user._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
