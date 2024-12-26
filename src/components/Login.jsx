import { React, useState, useContext } from "react";
import UserContext from "../Context/UserContext";
function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  const { SetUser } = useContext(UserContext);
  const handleSubmit = (e) => {
        e.preventDefault()
        SetUser({username,password})
  };
  return (
    <div className="mt-5">
      <h2>Login</h2>
      <div className="m-5">
      <input
      className="mr-3"
        type="text"
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
        placeholder="user-name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
        placeholder="password"
      />
      <button className="ml-3" onClick={handleSubmit}>Submit</button>
      </div>
      
    </div>
  );
}

export default Login;
