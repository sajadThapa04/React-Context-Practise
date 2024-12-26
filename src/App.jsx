import { useState } from "react";
import UserContextProvider from "./Context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">How are you bro?</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
